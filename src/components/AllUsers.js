import React from "react";
import Profile from "./Profile";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import load from "./images/loading.jpg";

const AllUsers = () => {
  const [loading, setloading] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUsers, setCurrentUsers] = useState(1);
  const [userPerPage] = useState(12);
  // const [disabled, setDisabled] = useState(false);
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

  const hclick = (e) => {
    setCurrentUsers(Number(e.target.id));
  };
  const pages = [];
  for (let i = 1; i <= Math.ceil(users.length / userPerPage); i++) {
    pages.push(i);
  }

  const renderPages = pages.map((num) => {
    return (
      <li key={num} id={num} onClick={hclick}>
        {num}
      </li>
    );
  });

  const indexOfLastUser = currentUsers * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentListUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  console.log(users);
  const paginate = (pageNumber) => {
    setCurrentUsers(pageNumber);
  };

  function handleNext(e) {
    e.preventDefault();
    if (currentUsers < Math.ceil(users.length / userPerPage)) {
      setCurrentUsers((next) => next + 1);
    }
  }
  function handlePrev(e) {
    e.preventDefault();
    if (currentUsers > 0) {
      setCurrentUsers((prev) => prev - 1);
    }
  }

  return (
    <div>
      {loading ? (
        <div className="loading">
          <img src={load} alt="loading" />
          <p>Efile eje ko COOK</p>
        </div>
      ) : (
        <>
          {/* <Pagination
            userPerPage={userPerPage}
            totalUsers={users.length}
            paginate={paginate}
            />
             */}
          {/* {Array.from({ length: 10 }, (_, idx) => idx + 1).map((btn) => (
            <button
              key={btn}
              onclick={() => {
                paginate(btn);
              }}
            >
              {btn}
            </button>
          ))} */}
          <div className="pagination-container">
            <nav className="pagination">
              <ul className="pages">{renderPages}</ul>
            </nav>
          </div>

          <button
            className="btn-pagination"
            disabled={currentUsers <= 1}
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            className="btn-pagination"
            disabled={currentUsers >= Math.ceil(users.length / userPerPage)}
            onClick={handleNext}
          >
            Next
          </button>

          <Profile users={currentListUsers} />
        </>
      )}
    </div>
  );
};

export default AllUsers;
