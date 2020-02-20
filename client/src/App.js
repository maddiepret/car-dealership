import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Image from "./Image/cars.jpg";

//---below is the imports for all our website files---//
import Navbar from "./components/navbar";
import CarsList from "./components/cars-list";
import EditCar from "./components/edit-car";
import AddCar from "./components/add-car";

function App() {
    return ( <
        Router >
        <
        Navbar / >
        <
        div className = "image" >
        <
        img src = { Image }
        alt = "3d object"
        className = "img-3d" / >
        <
        /div> <
        div className = "container" > { /* home route */ } <
        Route path = "/"
        exact component = { CarsList }
        /> { /* car edit route */ } <
        Route path = "/edit/:id"
        exact component = { EditCar }
        /> { /* car add route */ } <
        Route path = "/add"
        exact component = { AddCar }
        /> <
        /div> <
        /Router>
    );
}

export default App;