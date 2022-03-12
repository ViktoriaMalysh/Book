const keys = require("../keys/keys");
const { User, Emails, UserRooms, Payment, PhoneNumbers, PaymentCards, HotelRooms, SaleRooms } = require("../sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sequelize = require("../sequelize");

module.exports.sign_up = async function (req, res) {
  try{
    const candidat = {
      name: req.body.name,
      surname: req.body.surname,
      gender: req.body.gender,
      country: req.body.country,
      phone_number: req.body.phone_number,
      email: req.body.email, 
      dateOfBirth: req.body.dateOfBirth,  
      password: req.body.password,    
    };
    const isAdmin = candidat.email === 'admin@gmail.com' ? true : false

    await User.sync({ alter: true });
    // await HotelRooms.sequelize.sync({ alter: true });

    const salt = bcrypt.genSaltSync(10);
    const pass = bcrypt.hashSync(candidat.password, salt);

    // let room = await HotelRooms.create({
    //   country: 'Turkey'
    // })
    // await room.save();  

    const user = await User.create({
      name: candidat.name,
      surname: candidat.surname,  
      gender: candidat.gender,
      country: candidat.country,
      dateOfBirth: candidat.dateOfBirth,
      phone_number: candidat.phone_number,
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
        token: token,
        id: user.dataValues.id,
        name: user.dataValues.name,
        surname: user.dataValues.surname,  
        gender: user.dataValues.gender,
        country: user.dataValues.country,
        dateOfBirth: user.dataValues.dateOfBirth,
        phone_number: user.dataValues.phone_number,
        email: user.dataValues.email,
        isAdmin: user.dataValues.isAdmin,  
      });
        // const user = await User.findByPk(42);   
  }catch(err){
    console.log('err', err)
    res.status(404).json({ 
      message: `${req.body.email} is already in use, please try another email` 
    })
  }
};

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
        token: token,
        id: user.id,
        name: user.name,
        surname: user.surname,  
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

    // const temp1 = await HotelTicket.destroy({ where: { id_user: user.id } });
    // const temp2 = await AviaTicket.destroy({ where: { id_user: user.id } });
    // if ((temp === 1) | (temp1 === 1) | (temp2 === 1)) {
      if(temp === 1){
        res.status(200).json({ delete: true });
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
          name: check_user.name, 
          surname: check_user.surname,
          gender: check_user.gender,
          age: check_user.age,
          country: check_user.country,
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
    await User.sequelize.sync({ alter: true });
    const user = {
      id: req.body.id,
      name: req.body.name,
      surname: req.body.surname,
      gender: req.body.gender,
      dateOfBirth: req.body.dateOfBirth,
      country: req.body.country,
    };
    console.log(user);

    await User.findAll({ where: { id: user.id }, raw: true })
      .then(async (result) => {
        if (result) console.log("result", result);

        await User.update(
          {
            name: user.name,
            surname: user.surname,
            gender: user.gender,
            dateOfBirth: user.dateOfBirth,
            country: user.country,
          },
          { where: { id: user.id } }
        );

        const newToken = jwt.sign(
          {
            email: result[0].email,
            password: result[0].password,
            role: result[0].role,
            id: user.id,
          },
          keys.jwt,
          { expiresIn: 600 }
        );
        res.status(200).json({ token: newToken, flag: true });
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log("Error: " + err);
    res.status(404).json({ flag: false });
  }
};

// module.exports.changeEmail = async function (req, res) {
//   try {
//     await User.sequelize.sync({ alter: true });
//     const user = {
//       id: req.body.id,
//       email: req.body.email,
//     };
//     await User.findAll({ where: { id: user.id }, raw: true })
//       .then(async (result) => {
//         if (result)
//           await User.update(
//             {
//               email: user.email,
//             },
//             { where: { id: user.id } }
//           );

//         const newToken = jwt.sign(
//           {
//             email: user.email,
//             password: result[0].password,
//             role: result[0].role,
//             id: user.id,
//           },
//           keys.jwt,
//           { expiresIn: 600 }
//         );
//         res.status(200).json({ token: newToken, flag: true });
//       })
//       .catch((err) => console.log(err));
//   } catch (err) {
//     console.log("Error: " + err);
//     res.status(404).json({ flag: false });
//   }
// };

// module.exports.changePhone = async function (req, res) {
//   try {
//     await User.sequelize.sync({ alter: true });
//     const user = {
//       id: req.body.id,
//       phone: req.body.phone,
//     };
//     await User.findAll({ where: { id: user.id }, raw: true })
//       .then(async (result) => {
//         if (result)
//           await User.update(
//             {
//               phone: user.phone,
//             },
//             { where: { id: user.id } }
//           );

//         res.status(200).json({ flag: true });
//       })
//       .catch((err) => console.log(err));
//   } catch (err) {
//     console.log("Error: " + err);
//     res.status(404).json({ flag: false });
//   }
// };

// module.exports.changePassword = async function (req, res) {
//   try {
//     await User.sequelize.sync({ alter: true });
//     const user = {
//       id: req.body.id,
//       password: req.body.password,
//     };
//     await User.findAll({ where: { id: user.id }, raw: true })
//       .then(async (result) => {
//         if (result) {
//           const salt = bcrypt.genSaltSync(10);
//           const pass = bcrypt.hashSync(user.password, salt);

//           await User.update(
//             {
//               password: pass,
//             },
//             { where: { id: user.id } }
//           );

//           const newToken = jwt.sign(
//             {
//               email: result[0].email,
//               password: pass,
//               role: result[0].role,
//               id: user.id,
//             },
//             keys.jwt,
//             { expiresIn: 600 }
//           );
//           res.status(200).json({ token: newToken, flag: true });
//         }
//       })
//       .catch((err) => console.log(err));
//   } catch (err) {
//     console.log("Error: " + err);
//     res.status(404).json({ flag: false });
//   }
// };

// module.exports.validatePassword = async function (req, res) {
//   const user = {
//     id: req.body.id,
//     password: req.body.password,
//   };

//   await User.findAll({ where: { id: user.id }, raw: true }).then((result) => {
//     if (result) {
//       const flag = bcrypt.compareSync(user.password, result[0].password);
//       if (flag) res.status(200).json({ flag: true });
//       else if (!flag) res.status(404).json({ flag: false });
//     } else res.status(404).json({ flag: false });
//   });
// };

// module.exports.setId = async function (req, res) {
//   try {
//     const token = await req.headers["authorization"];
//     const decode_token = await decodeToken(token);
//     const user = {
//       email: decode_token.email,
//       password: decode_token.password,
//       role: decode_token.role,
//       id: decode_token.id,
//     };
//     if (id != 0) res.status(200).json({ id: user.id });
//     else res.status(404);
//   } catch (err) {
//     console.log("Error: " + err);
//     res.status(404);
//   }
// };

checkRole = async function (req, res) {
  const email = req.email;
  const result = await User.findOne({ where: { email: email } });
  let role = 0;
  if (result != null) {
    let l = result.toJSON();
    role = l.role;
  }
  if (role === 1) return 1;
  return 2;
};

checkUser = async function (req, res) {
  const email = req;
  console.log("email", email);
  const result = await User.findOne({ where: { email: email }, raw: true });
  console.log(result);
  if (result === null) return false;
  else if (result.email === email) return result;
};

checkEmailLogin = async function (req, res) {
  const user = req;
  const result = await User.findOne({
    where: { email: user.email, password: user.password },
  });
  if (result != null) return true;
  else return false;
};

setIdUser = async function (req, res) {
  const user = req;
  const result = await User.findOne({
    attributes: ["id"],
    where: { email: user.email },
  });
  const id = result.dataValues.id;
  return id;
};


