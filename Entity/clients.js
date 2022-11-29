const mongoose = require("mongoose");
const { isEmail } = require("validator");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const { minlenghth } = require("validator");

const ClientSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: [true, "pleas enter the name"],
    },
    email: {
      type: String,
      validate: [isEmail, "pleas enter the true email"],
      required: [true, "pleas enter the email"],
    },
    password: {
      type: String,
      required: true,
      minlenghth: [6, "minumum password is 6 characters"],
    },
    complaint:{
      type : String ,
    },

  },
  { timestamps: true }
);

ClientSchema.methods.hashPassword = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(6), null);
};

const clients = mongoose.model("clients", ClientSchema);
module.exports = clients;
