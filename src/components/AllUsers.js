import React from "react";
import Profile from "./Profile";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";

const AllUsers = () => {
  const [loading, setloading] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUsers, setCurrentUsers] = useState(1);
  const [userPerPage, setUserPerPage] = useState(12);
  useEffect(() => {
    const fetchRandomUser = async () => {
      setloading(true);
      const response = await fetch("https://randomuser.me/api/?results=100");
      const { results } = await response.json();
      setUsers(results);
      setloading(false);
    };

    fetchRandomUser();
  }, []);
  const indexOfLastUser = currentUsers * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentListUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  console.log(users);
  const paginate = (pageNumber) => {
    setCurrentUsers(pageNumber);
  };
  return (
    <div>
      {loading ? (
        "Loading........."
      ) : (
        <>
          <Pagination
            userPerPage={userPerPage}
            totalUsers={users.length}
            paginate={paginate}
          />
          <Profile users={currentListUsers} />
        </>
      )}
    </div>
  );
};

export default AllUsers;
