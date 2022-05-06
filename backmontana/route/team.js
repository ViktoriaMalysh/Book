const express = require("express");
const router = express.Router();
const teamPoint = require("../controllers/teamPoint");

//localhost:8000/rooms/booking_room
router.get("/show_team", teamPoint.showTeam);

module.exports = router;
