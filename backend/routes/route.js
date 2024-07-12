const express = require("express");
const route = express.Router();
const {authMiddleware,isAdmin} = require('../middleware/authMiddleWare')
const {
  registerAndFillData,
  login,

} = require("../controller/user");



// Define route to fetch filled applications
route.post("/register", registerAndFillData);
route.post("/login", login);

module.exports = route;