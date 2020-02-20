const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const app = express();
const port = process.env.PORT || 5000;

//---middleware----//
app.use(cors());
app.use(express.json());

const config = require('config');
//get mongo URI
const db = config.get('mongoURI');

//Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


//--these are the routes that we will be using in our front end---//
const carsRouter = require("./routes/cars");
app.use("/cars", carsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});