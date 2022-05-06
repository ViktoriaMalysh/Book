const keys = require("../keys/keys");
const { Team } = require("../sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sequelize = require("../sequelize");

module.exports.showTeam = async function (req, res) {
  try {
    const team = await Team.findAll({ raw: true });
    res.send(team);
  } catch (err) {
    console.log("Error: " + err);
  }
};
