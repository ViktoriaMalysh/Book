const { UserRooms, HotelRooms, SaleRooms, User } = require("../sequelize");
const sequelize = require("../sequelize");

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

module.exports.showMyRoomsWithStatus = async function (req, res) {
  try {
    const id = req.body.id;
    const status = req.body.status;

    const rooms = await User.findAll({
      where: { id: id }, attributes: [], raw: true,
      include: [{
        model: HotelRooms,
        where: {
          status: status
        }
      }]
    });

    if(rooms.length === 0){
      res.status(404).json({ 
        message: `You do not have any ${status} rooms`,  
      })
    }else{
      res.status(200).json({ 
        rooms: rooms
      })
    }
  } catch (err) {
    console.log("Error: " + err);
    res.status(500).json({ message: 'Server have some problem' });
  }
};

module.exports.showSaleRooms = async function (req, res) {
  try {
    const saleRooms = await SaleRooms.findAll({ raw: true })
    if(saleRooms.length === 0){
      res.status(404).json({ 
        message: 'No any promotional offers',  
      })
    }else{
      res.status(200).json({ 
        saleRooms: saleRooms,  
      })
    }
  } catch (err) {
    console.log("Error: " + err);
    res.status(500).json({ message: 'Server have some problem' });
  }
};