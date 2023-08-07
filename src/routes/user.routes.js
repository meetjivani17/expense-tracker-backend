const express = require("express");
const multer = require("multer");

const UpdateUserController = require("../contoller/UserController/UpdateUser.controller");
const CreateUesrController = require("../contoller/UserController/Register.controller");

const DeleteUserController = require("../contoller/UserController/DeleteUser.controller");
const tokenVerifier = require("../middleware/tokenVerifiers.middleware");
const UserProfileController = require("../contoller/UserController/UserProfile.controller");

const userRoutes = express();

userRoutes.post("/", CreateUesrController);
userRoutes.patch("/", tokenVerifier, UpdateUserController);
userRoutes.delete("/", tokenVerifier, DeleteUserController);
userRoutes.get("/fetch-by-id", UserProfileController);
 
module.exports = userRoutes;
