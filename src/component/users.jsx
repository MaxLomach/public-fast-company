import React, { useState } from "react";
import API from "../API";
import "../index.css";
import GetUserApi from "./getUserApi";
import Info from "./info";
import Pagination from "./pagination";

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const count = users.length;
  const pageSize = 4;

  const newState = (user) => {
    const newBookmark = users.map((element) => {
      if (element._id === user._id) {
        if (element.bookmark === true) {
          element.bookmark = false;
        } else {
          element.bookmark = true;
        }
      }
      return element;
    });
    setUsers(newBookmark);
  };

  const handleDelId = (id) => {
    setUsers(users.filter((users) => users._id !== id));
  };

  const handlePageChange = (pageIndex) => {
    console.log("page", pageIndex);
  };

  return count === 0 ? (
    <Info itemsCount={count} {...users} />
  ) : (
    <>
      <Info itemsCount={count} {...users} />
      <table className="table table-bordered table-hover bg-success bg-opacity-25">
        <thead className="text-center bg-success bg-opacity-50">
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился(раз)</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="text-center">
          <GetUserApi
            key={users._id}
            onDel={handleDelId}
            newState={newState}
            users={users}
            {...users}
          />
        </tbody>
      </table>
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Users;
