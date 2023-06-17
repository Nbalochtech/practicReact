import React from "react";
import * as Icon from "react-bootstrap-icons";

const UserTable = (props) => {
  const removeUser = (index) => {
    let arr = props.data;
    props.data.splice(index, 1);
    props.setData([...arr]);
  };
  return (
    <>
      <div>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((user, index) => {
              return (
                <tr key={index}>
                  <th scope={index}>{index}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeUser(index)}
                    >
                      <Icon.Trash2Fill />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserTable;
