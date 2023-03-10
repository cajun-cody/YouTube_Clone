import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";
import './HomePage.css';


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchCars();
  }, [token]);
  return (
    <div className="container">
      <h1 className="home-welcome">Welcome to RouxTube {user.username}!</h1>
      <h3>Click below to see what's cookin!!</h3>
      <Link to='/search'>
        <button className='pot-btn' type="button">
        <h2 class='pot-btn-text'>Click Me!</h2>
        </button>
      </Link>
    </div>

  );
};

export default HomePage;
/* <img src="GumboPot.png" alt="pot" /> */

      // {cars &&
      //   cars.map((car) => (
      //     <p key={car.id}>
      //       {car.year} {car.model} {car.make}
      //     </p>
      //   ))}