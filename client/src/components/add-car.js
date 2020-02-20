import React, { Component } from "react";
import axios from "axios";

//----This is our class function for our add object method----//
class AddCar extends Component {
  constructor(props) {
    super(props);

    //---defining this by the following expressions---//
    this.onChangeOwner = this.onChangeOwner.bind(this);
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangeMake = this.onChangeMake.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.onChangeRegistrationNumber = this.onChangeRegistrationNumber.bind(
      this
    );
    this.onSubmit = this.onSubmit.bind(this);

    //--- This will be the initial state for all components--//
    this.state = {
      owner: "",
      model: "",
      make: "",
      color: "",
      registration_Number: ""
    };
  }

  //---function to target our car owner form field---//
  onChangeOwner(e) {
    this.setState({
      owner: e.target.value
    });
  }

  //---function to target our car model form field---//
  onChangeModel(e) {
    this.setState({
      model: e.target.value
    });
  }

  //---function to target our car make form field---//
  onChangeMake(e) {
    this.setState({
      make: e.target.value
    });
  }

  //---function to target our car color form field---//
  onChangeColor(e) {
    this.setState({
      color: e.target.value
    });
  }

  //---function to target our car registration number form field---//
  onChangeRegistrationNumber(e) {
    this.setState({
      registration_Number: e.target.value
    });
  }

  //---This is our on submit function, to submit all values on the form---//
  onSubmit(e) {
    e.preventDefault();

    //---This will set state for our new object---//
    const car = {
      owner: this.state.owner,
      model: this.state.model,
      make: this.state.make,
      color: this.state.color,
      registration_Number: this.state.registration_Number
    };

    console.log(car);
    //---axios post for the new submitted object
    axios
      .post("http://localhost:5000/cars/add", car)
      .then(res => console.log(res.data))
      .catch(error => {
        console.log(error);
      });
    //---after submit button return to home page---//
    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Add Car Details</h3>
        {/* add form */}
        <form onSubmit={this.onSubmit}>
          {/* Car owner field */}
          <div className="form-group">
            <label>Car Owner </label>
            <input
              type="text"
              className="form-control"
              value={this.state.owner}
              onChange={this.onChangeOwner}
            />
          </div>
          {/* Car model field */}
          <div className="form-group">
            <label>Car Model </label>
            <input
              type="text"
              className="form-control"
              value={this.state.model}
              onChange={this.onChangeModel}
            />
          </div>
          {/* Car make field */}
          <div className="form-group">
            <label>Car Make </label>
            <input
              type="text"
              className="form-control"
              value={this.state.make}
              onChange={this.onChangeMake}
            />
          </div>
          {/* Car color field */}
          <div className="form-group">
            <label>Car Color </label>
            <input
              type="text"
              className="form-control"
              value={this.state.color}
              onChange={this.onChangeColor}
            />
          </div>
          {/* Car Registration Number field */}
          <div className="form-group">
            <label>Car Registration Number </label>
            <input
              type="text"
              className="form-control"
              value={this.state.registration_Number}
              onChange={this.onChangeRegistrationNumber}
            />
          </div>
          {/* submit button */}
          <div className="form-group">
            <input type="submit" value="Add Car" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddCar;
