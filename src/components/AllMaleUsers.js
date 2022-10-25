import React from "react";
import load from "./images/loading.jpg";
import { useState, useEffect } from "react";

const AllMaleUsers = () => {
  const [loading, setloading] = useState(false);
  const [maleUsers, setMaleUsers] = useState([]);
  useEffect(() => {
    const fetchMaleRandomUser = async () => {
      setloading(true);
      const response = await fetch("https://randomuser.me/api/?results=50");
      const { results } = await response.json();
      setMaleUsers(results);
      setloading(false);
    };
    fetchMaleRandomUser();
  }, []);

  console.log(maleUsers);
  return (
    <div>
      {loading ? (
        <div className="loading">
          <img src={load} alt="loading" />
          <p>Efile eje ko COOK</p>
        </div>
      ) : (
        <div className="grid">
          {maleUsers.map((user, index) => {
            if (user.gender === "male") {
              return (
                <div key={index} className="user-profile-container">
                  <img src={user.picture.large} alt="random person " />
                  <div className="details">
                    <h5>
                      <span>Name:</span> {user.name.title} {user.name.first}{" "}
                      {user.name.last}
                    </h5>
                    <p>
                      <span>Email:</span> {user.email}
                    </p>
                    <p>
                      <span>Country:</span> {user.location.country}
                    </p>
                    <p>
                      <span>Age:</span> {user.dob.age}
                    </p>
                  </div>
                </div>
              );
            } else {
              <p>no male user</p>;
            }
          })}
        </div>
      )}
    </div>
  );
};

export default AllMaleUsers;
