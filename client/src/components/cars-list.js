import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//----This is a react function for our table with all cars----//
const Car = props => (
  <tr>
    <td>{props.car.owner}</td>
    <td>{props.car.model}</td>
    <td>{props.car.make}</td>
    <td>{props.car.color}</td>
    <td>{props.car.registration_Number}</td>
    <td>
      <Link to={"/edit/" + props.car._id}> edit </Link> |{" "}
      <a
        href="/"
        onClick={() => {
          props.deleteCar(props.car._id);
        }}
      >
        {" "}
        delete{" "}
      </a>
    </td>
  </tr>
);

//----This is our class function to get data from the database----//
class CarsList extends Component {
  constructor(props) {
    super(props);

    //---defining this by the following expression---//
    this.deleteCar = this.deleteCar.bind(this);

    //--- This will be the initial state our array--//
    this.state = { cars: [] };
  }

  componentDidMount() {
    //---our axios get method for all our cars--//
    axios
      .get("http://localhost:5000/cars/")
      .then(response => {
        this.setState({ cars: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  //---our axios delete method for all our cars--//
  deleteCar(id) {
    axios.delete("http://localhost:5000/cars/" + id).then(response => {
      console.log(response.data);
    });

    this.setState({
      cars: this.state.cars.filter(el => el._id !== id)
    });
  }

  //---function to map all cars object and pass props for the Car function--//
  carList() {
    return this.state.cars.map(currentcar => {
      return (
        <Car car={currentcar} deleteCar={this.deleteCar} key={currentcar._id} />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Cars Database</h3>
        {/* cars table*/}
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Owner</th>
              <th>Model</th>
              <th>Make</th>
              <th>Color</th>
              <th>Registration Number</th>
            </tr>
          </thead>
          <tbody>{this.carList()}</tbody>
        </table>
      </div>
    );
  }
}

export default CarsList;
