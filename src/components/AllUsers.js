import React from "react";
import Profile from "./Profile";
import { useState, useEffect } from "react";

const AllUsers = () => {
  const [loading, setloading] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchRandomUser = async () => {
      setloading(true);
      const response = await fetch("https://randomuser.me/api/?results=500");
      const { results } = await response.json();
      setUsers(results);
      setloading(false);
    };
    fetchRandomUser();
  }, []);

  console.log(users);

  return <div>{loading ? "Loading........." : <Profile users={users} />}</div>;
};

export default AllUsers;
