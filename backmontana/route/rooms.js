const express = require("express");
const router = express.Router();
const roomsPoint = require("../controllers/roomsPoint");

//localhost:8000/rooms/booking_room
router.post("/booking_room", roomsPoint.bookingRoom);

//localhost:8000/rooms/cancel_book
router.post("/cancel_book", roomsPoint.cancelBooking);

//localhost:8000/rooms/show_my_rooms
router.post("/show_my_rooms", roomsPoint.showMyRoomsWithStatus);

//localhost:8000/rooms/show_sale
router.get("/show_sale", roomsPoint.showSaleRooms);

module.exports = router;
    