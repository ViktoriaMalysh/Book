const keys = require("../keys/keys");
const { User, PaymentCards, UserPaymentCards } = require("../sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sequelize = require("../sequelize");

module.exports.sign_up = async function (req, res) {
  try{
    const candidat = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      gender: req.body.gender,
      country: req.body.country,
      email: req.body.email, 
      dateOfBirth: req.body.dateOfBirth,  
      password: req.body.password,    
    };
    const isAdmin = candidat.email === 'admin@gmail.com' ? true : false
    await User.sync({ alter: true });
    const salt = bcrypt.genSaltSync(10);
    const pass = bcrypt.hashSync(candidat.password, salt);

    const user = await User.create({
      firstName: candidat.firstName,
      lastName: candidat.lastName,  
      gender: candidat.gender,
      country: candidat.country,
      dateOfBirth: candidat.dateOfBirth,
      email: candidat.email,
      password: pass,
      isAdmin: isAdmin,  
    })
    await user.save()
      // await room.addUser(user)

    const token = jwt.sign(  
      {
        email: candidat.email,
        password: pass,
        isAdmin: isAdmin,
        id: user.dataValues.id
      },
        keys.jwt,
        { expiresIn: 300 }
      );
      res.status(200).json({
        message: `${user.dataValues.name} successfully registered!`,
        token: token,
        id: user.dataValues.id,
        firstName: user.dataValues.firstName,
        lastName: user.dataValues.lastName,  
        gender: user.dataValues.gender,
        country: user.dataValues.country,
        dateOfBirth: user.dataValues.dateOfBirth,
        email: user.dataValues.email,
        isAdmin: user.dataValues.isAdmin,  
      });
  }catch(err){
    console.log('err', err)
    res.status(404).json({ 
      message: `${req.body.email} is already in use, please try another email` 
    })
  }
};

module.exports.addPaymentCard = async function (req, res) {
  try{
    const paymentCard = {
      number: req.body.number,
      cnn: req.body.cnn,
      MM_YY: req.body.MM_YY,
      zip: req.body.zip,
    };
    const id = req.body.id;

    await User.sync({ alter: true });
    await UserPaymentCards.sync({ alter: true });
    await PaymentCards.sync({ alter: true });

    const userFind = await User.findByPk(id); 

    if(userFind === null){
      res.status(404).json({ 
        message: "Invalid id", 
        addPaymentCard: false 
      });
    }else{
      const payment = await PaymentCards.create({
        number: paymentCard.number,
        cnn: paymentCard.cnn,
        MM_YY: paymentCard.MM_YY,
        zip: paymentCard.zip,
      })
      await payment.save();  
      await payment.addUser(id)

      if(payment === null){
        res.status(404).json({
          message: "Payment card not added",
          addPaymentCard: false
        })
      }else{
        res.status(200).json({
          message: "Payment card has been successfully added!",
          addPaymentCard: true
        })
      }
    }
  }catch(err){
    console.log('Error', err)
    res.status(500).json({
      message: "Server have some problem",
      addPaymentCard: false
    })
  }
}

module.exports.sign_in = async function (req, res) {
  try{
    const candidat = {
      email: req.body.email, 
      password: req.body.password,    
    };
    const user = await checkUser(candidat.email);
    if(!user){
      res.status(404).json({
        message: 'User is not found'
      })
    }else{
      const flag = bcrypt.compareSync(candidat.password, user.password);      
      const token = jwt.sign(  
        {
          email: user.email,
          password: user.password,
          isAdmin: user.isAdmin,
          id: user.id
        },
          keys.jwt,
          { expiresIn: 300 }
      );

      res.status(200).json({
        message: "Login was successful!",
        token: token,
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,  
        gender: user.gender,
        country: user.country,
        dateOfBirth: user.dateOfBirth,
        phone_number: user.phone_number,
        email: user.email,
        isAdmin: user.isAdmin,  
      });
    }
  }catch(err){
    console.log('err', err)
    res.status(500).json({ 
      message: 'Server have some problem...' 
    })
  }
};

module.exports.deleteAccount = async function (req, res) {
  try {
    const token = await req.headers["authorization"];
    const decode_token = jwt.decode(token);
    const user = {
      email: decode_token.email,
      password: decode_token.password,
      isAdmin: decode_token.isAdmin,
      id: decode_token.id,
    };

    const temp = await User.destroy({
      where: { email: user.email, password: user.password },
    });
    
    if(temp === 1){
      res.status(200).json({ 
        message: "Account has been successfully deleted!",
        delete: true 
      });
    }
  } catch (err) {
    console.log("Error: " + err);
    res.status(500).json({ message: 'Server have some problem' });
  }
};

module.exports.verifyToken = async function (req, res) {
  try {
    const token = await req.headers["authorization"];
    const decode_token = await jwt.decode(token);
    if(decode_token === null){
      res.status(404).json({ message: 'invalid token' })
    }else{
      const check_user = await checkUser(decode_token.email);
      await jwt.verify(token, keys.jwt, function (err, decoded) {
        const newToken = jwt.sign(
          {
            email: decode_token.email,
            password: decode_token.password,
            isAdmin: decode_token.isAdmin,
            id: decode_token.id,  
          },
          keys.jwt,
          { expiresIn: 600 }
        );
        res.status(200).json({
          token: err ? newToken : token,
          id: check_user.id,   
          firstName: check_user.firstName, 
          lastName: check_user.lastName,
          gender: check_user.gender,
          country: check_user.country,
          dateOfBirth: check_user.dateOfBirth,
          phone: check_user.phone,
          email: check_user.email,
          isAdmin: check_user.isAdmin,
        });
      });
    }
  } catch (err) {
    console.log("Error: " + err);
    res.status(500).json({ message: 'Server have some problem' });  
  }
};

module.exports.changeProfile = async function (req, res) {
  try {
    const user = {
      id: req.body.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      gender: req.body.gender,
      dateOfBirth: req.body.dateOfBirth,
      country: req.body.country,
    };
    await User.sync({ alter: true });
    const userFind = await User.findByPk(user.id); 

    if(userFind === null){
      res.status(404).json({ 
        message: "User is not found", 
        update: false 
      });
    }else{
      const update = await User.update({
        firstName: user.firstName,
        lastName: user.lastName,
        gender: user.gender,
        dateOfBirth: user.dateOfBirth,
        country: user.country,
      },
      { where: { id: user.id } });

      if(update === 1){
        const newToken = jwt.sign(
          {
            email: userFind.email,
            password: userFind.password,
            isAdmin: userFind.isAdmin,
            id: userFind.id,
          },
          keys.jwt,
          { expiresIn: 600 }
        );
        res.status(200).json({ 
          message: "Profile has been successfully updated!", 
          token: newToken, 
          update: true 
        });
      }
    }
  } catch (err) {
    console.log("Error: " + err);
    res.status(500).json({ 
      message: "Server have some problem", 
      update: false 
    });
  }
};

module.exports.changeEmail = async function (req, res) {
  try {
    const {id, email} = req.body

    await User.sync({ alter: true });
    const userFind = await User.findByPk(id); 

    if(userFind === null){
      res.status(404).json({ 
        message: "User is not found",
        update: false
      });
    }else{
      await User.update({ email: email }, { where: { id: id } });
        const newToken = jwt.sign(
          {
            email: email,
            password: userFind.password,
            isAdmin: userFind.isAdmin,
            id: id,
          },
          keys.jwt,
          { expiresIn: 600 }
        );
        res.status(200).json({ 
          message: "Email has been successfully updated!",
          token: newToken, 
          update: true 
        });
    }
  } catch (err) {
    console.log("Error: " + err);
    res.status(500).json({ message: 'Server have some problem' });
  }
};

module.exports.changePhone = async function (req, res) {
  try {
    const {id, phone} = req.body
    await User.sync({ alter: true });
    const userFind = await User.findByPk(id); 

    if(userFind === null){
      res.status(404).json({ 
        message: "User is not found", 
        update: false 
      });
    }else{
      await User.update({ phone: phone }, { where: { id: id } });
      res.status(200).json({ 
        message: "Phone number has been successfully updated!",
        update: true 
      });    
    }
  }catch (err) {
    console.log("Error: " + err);
    res.status(500).json({
      message: "Server have some problem", 
      update: false 
    });
  }
};

module.exports.changePassword = async function (req, res) {
  try {
    const { id, password } = req.body

    await User.sync({ alter: true });
    const userFind = await User.findByPk(id); 
    if(userFind === null){
      res.status(404).json({ 
        message: "User is not found", 
        update: false 
      });
    }else{
      const salt = bcrypt.genSaltSync(10);
      const pass = bcrypt.hashSync(password, salt);
      await User.update({ password: pass }, { where: { id: id } });
      const newToken = jwt.sign({
        email: userFind.email,
        password: pass,
        isAdmin: userFind.isAdmin,
        id: id,
      },
      keys.jwt,
      { expiresIn: 600 });
      res.status(200).json({ 
        message: "Password has been successfully updated!",
        token: newToken, 
        update: true 
      })
    }
  } catch (err) {
    console.log("Error: " + err);
    res.status(500).json({
      message: "Server have some problem",
      update: false 
    });
  }
};

module.exports.validatePassword = async function (req, res) {
  try{
    const { id, password } = req.body;

    const userFind = await User.findByPk(id); 
    if(userFind === null){
      res.status(404).json({ 
        message: "User is not found", 
        validate: false 
      })
    }else{
      const flag = bcrypt.compareSync(password, userFind.password);
      if (flag){
        res.status(200).json({ 
          validate: true 
        });
      }else{
        res.status(404).json({ 
          message: "Incorrect password",
          validate: false 
        }); 
      } 
    }
  }catch (err) {
    console.log("Error: " + err);
    res.status(500).json({
      message: "Server have some problem",
      validate: false 
    });
  }
};

module.exports.setId = async function (req, res) {
  try {
    const token = await req.headers["authorization"];
    const decode_token = await jwt.decode(token);
    if(decode_token === null) res.status(404).json({ message: 'invalid token' })
    else res.status(200).json({ id: decode_token.id });
  }catch (err) {
    console.log("Error: " + err);
    res.status(500).json({
      message: "Server have some problem"
    });
  }
};

checkUser = async function (req, res) {
  const email = req;
  const result = await User.findOne({ where: { email: email }, raw: true });
  if (result === null) return false;
  else if (result.email === email) return result;
};