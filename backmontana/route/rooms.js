const express = require("express");
const router = express.Router();
const roomsPoint = require("../controllers/roomsPoint");

//localhost:8000/rooms/booking_room
router.post("/booking_room", roomsPoint.bookingRoom);

//localhost:8000/rooms/cancel_book
router.post("/cancel_book", roomsPoint.cancelBooking);

//localhost:8000/rooms/show_my_booked_rooms
router.post("/show_my_booked_rooms", roomsPoint.showMyBookedRooms);

//localhost:8000/rooms/show_my_bought_rooms
// router.post("/show_my_bought_rooms", roomsPoint.showMyBoughtRooms);

//localhost:8000/rooms/show_sale
// router.post("/show_sale", roomsPoint.showSaleRooms);

//localhost:8000/rooms/payment
// router.post("/payment", roomsPoint.payment);

module.exports = router;
    