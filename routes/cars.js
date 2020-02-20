const router = require("express").Router();
//---import car models from models folder---//
let Car = require("../models/cars.model");

//--our get method from our database---//
router.route("/").get((req, res) => {
  Car.find()
    .then(cars => res.json(cars))
    .catch(err => res.status(400).json("Error: " + err));
});

//----our post method to add new objects---//
router.route("/add").post((req, res) => {
  const owner = req.body.owner;
  const model = req.body.model;
  const make = req.body.make;
  const color = req.body.color;
  const registration_Number = req.body.registration_Number;

  const newCar = new Car({
    owner,
    model,
    make,
    color,
    registration_Number
  });

  newCar
    .save()
    .then(() => res.json("Car added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

//----get object by its id from the database---//
router.route("/:id").get((req, res) => {
  Car.findById(req.params.id)
    .then(car => res.json(car))
    .catch(err => res.status(400).json("Error: " + err));
});

//---delete method for objects in database by their id---//
router.route("/:id").delete((req, res) => {
  Car.findByIdAndDelete(req.params.id)
    .then(() => res.json("Car deleted!"))
    .catch(err => res.status(400).json("Error: " + err));
});

//---update method for objects in database by their id---//
router.route("/update/:id").post((req, res) => {
  Car.findById(req.params.id)
    .then(car => {
      car.owner = req.body.owner;
      car.model = req.body.model;
      car.make = req.body.make;
      car.color = req.body.color;
      car.registration_Number = req.body.registration_Number;

      car
        .save()
        .then(() => res.json("Car updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
