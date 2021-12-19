import React from "react";
import BookMark from "./bookMark";

const GetUserApi = (props) => {
  const createTableHTML = props.users.map((user) => {
    const GetQualities = () => {
      return user.qualities.map((qualities) => (
        <span className={`mx-1 badge bg-${qualities.color}`}>
          {`${qualities.name} `}
        </span>
      ));
    };

    return (
      <tr>
        <td>{user.name}</td>
        <td>{GetQualities()}</td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td>
          <BookMark
            onToggle={() => {
              props.newState(user);
            }}
            key={user._id}
            {...user}
          />
        </td>
        <td>
          <button
            className="btn btn-info btn-sm float-end"
            onClick={() => props.onDel(user._id)}
          >
            Dellete
          </button>
        </td>
      </tr>
    );
  });
  return createTableHTML;
};

export default GetUserApi;
