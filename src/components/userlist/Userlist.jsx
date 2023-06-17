import React, { useState } from "react";
import UserTable from "./UserTable";
import * as Icon from "react-bootstrap-icons";

const Userlist = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };
  return (
    <>
      <div className="container">
        <h1>User List</h1>
        <div className="row">
          <div className="col">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="First Name"
            />
          </div>
          <div className="col">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
          <div className="col">
            <button className="btn btn-success" onClick={addData}>
              <Icon.PersonPlusFill size={25} />
            </button>
          </div>
        </div>
        <br />
        <UserTable data={data} />
      </div>
    </>
  );
};

export default Userlist;
