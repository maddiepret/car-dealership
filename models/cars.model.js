const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//--- This is a schema for the car object on our database---//
const carSchema = new Schema(
  {
    owner: { type: String, required: true },
    model: { type: String, required: true },
    make: { type: String, required: true },
    color: { type: String, required: true },
    registration_Number: { type: String, required: true }
  },
  {
    //--To record time and date the object was created--//
    timestamps: true
  }
);

const Car = mongoose.model("Car", carSchema);
//---export Car module
module.exports = Car;
