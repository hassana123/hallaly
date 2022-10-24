import React from "react";

const Profile = ({ users }) => {
  return (
    <div className="grid">
      {users.map((user, index) => (
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
      ))}
    </div>
  );
};

export default Profile;
