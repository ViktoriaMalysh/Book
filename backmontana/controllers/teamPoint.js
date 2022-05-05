const keys = require("../keys/keys");
const { Team } = require("../sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sequelize = require("../sequelize");

module.exports.showSaleRooms = async function (req, res) {
  try {
    const team = await Team.findAll({ raw: true })
  
      res.send(team)
  } catch (err) {
    console.log("Error: " + err);
    // res.send.json({ message: 'Server have some problem' });
  }
};