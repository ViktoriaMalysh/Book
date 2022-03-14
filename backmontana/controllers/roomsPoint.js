const { UserRooms, HotelRooms, User } = require("../sequelize");
const sequelize = require("../sequelize");
// const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

module.exports.bookingRoom = async function (req, res) {
  try {
    const id = req.body.id;
    const room = {
      name: req.body.name,
      address: req.body.address,
      locality: req.body.locality,
      price: req.body.price,    
      url: req.body.url,
      status: req.body.status,
    };

    await HotelRooms.sync({ alter: true });
    await UserRooms.sync({ alter: true });
    await User.sync({ alter: true });

    const userFind = await User.findByPk(id); 

    if(userFind === null){
      res.status(404).json({ 
        message: "Invalid id", 
        book: false 
      });
    }else{
      const bookRoom = await HotelRooms.create({
        country: room.name,
        address: room.address,
        locality: room.locality,
        price: room.price,
        url: room.url,
        status: room.status,
      });
      await bookRoom.save();
      await bookRoom.addUser(id)

      if(bookRoom === null){
        res.status(404).json({ 
          message: "Hotel room not booked",
          book: false 
        });
      }else{
        res.status(200).json({ 
          message: "Hotel room has been successfully booked",
          book: true 
        });
      }
    }
  }catch (err) {
    console.log("Error: " + err);
    res.status(500).json({
      message: "Server have some problem",
      book: false
    });
  }
};

module.exports.cancelBooking = async function (req, res) {
  try {
    const id = req.body.id; 

    await HotelRooms.sync({ alter: true });

    const cancelBook = await HotelTicket.destroy({
      where: { id: id },
    });
    if (cancelBook === 1) res.status(200).json({ 
      message: "Room reservation canceled!", 
      cancel: true 
    });
    else res.status(404).json({ 
      message: "Room reservation wasn`t canceled!", 
      cancel: false 
    });
  } catch (err) {
    console.log("Error: " + err);
    res.status(500).json({ 
      message: "Server have some problem", 
      cancel: false 
    });
  }
};

module.exports.showMyBookedRooms = async function (req, res) {
  try {
    const id = req.body.id;

    const result = await User.findOne({
      where: { id: id }, raw: true,
      include: HotelRooms
    });

    console.log('result', result)

    // await HotelRooms.sync({ alter: true });

    // await UserRooms.findAll({ where: { id_user: id }, raw: true })
    //   .then((result) => {
    //     res.send(result);
    //   })
    //   .catch((err) => console.log(err));
  } catch (err) {
    console.log("Error: " + err);
    res.status(404).json({ flag: true });
  }
};

// module.exports.showMyBoughtRooms = async function (req, res) {
//   try {
//     await HotelTicket.sequelize.sync({ alter: true });
//     const id = req.body.id;
//     await HotelTicket.findAll({ where: { id_user: id }, raw: true })
//       .then((result) => {
//         res.send(result);
//       })
//       .catch((err) => console.log(err));
//   } catch (err) {
//     console.log("Error: " + err);
//     res.status(404).json({ flag: true });
//   }
// };

// module.exports.showSaleTicket = async function (req, res) {
//   try {
//     await SaleHotelTicket.sequelize.sync({ alter: true });
//     await SaleHotelTicket.findAll({ raw: true })
//       .then((result) => {
//         res.send(result);
//       })
//       .catch((err) => console.log(err));
//   } catch (err) {
//     console.log("Error: " + err);
//     res.status(404).json({ flag: true });
//   }
// };

// module.exports.payment = async function (req, res) {
//   let { amount, id } = req.body;
//   try {
//     const payment = await stripe.paymentIntents.create({
//       amount,
//       currency: "USD",
//       description: "Spatula company",
//       payment_method: id,
//       confirm: true,
//     });
//     console.log("Payment", payment);
//     res.json({
//       message: "Payment successful",
//       success: true,
//     });
//   } catch (error) {
//     console.log("Error", error);
//     res.json({
//       message: "Payment failed",
//       success: false,
//     });
//   }
// };
