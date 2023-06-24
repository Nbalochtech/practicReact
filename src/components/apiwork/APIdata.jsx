import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const APIdata = () => {
  const [numEmp, setNumEmp] = useState(10);
  let numover = numEmp < 1 ? 1 : numEmp;
  const [dataAPI, setDataAPI] = useState([]);
  const [prevInputValue, setPrevInputValue] = useState([]);
  const previnput = useRef();
  const inputField = useRef();

  const inputHanlde = (e) => {
    setNumEmp(e.target.value);
  };
  const SearchHandle = () => {
    console.log(inputField.current.value);
  };

  // useEffect(() => {
  //   // counterRender.current = counterRender.current + 1;
  //   previnput.current = numEmp;
  //   setPrevInputValue([...prevInputValue, previnput.current]);
  //   console.log(prevInputValue);
  // }, [numEmp]);

  useEffect(() => {
    async function getData() {
      const apilinkdata = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${numover}&idStarts=1001`
      );
      const res = await apilinkdata.json();
      setDataAPI(res);
    }
    getData();
  }, [numover]);
  return (
    <>
      <div className="container">
        <h1>Employee List</h1>
        <input
          type="number"
          ref={inputField}
          value={numEmp}
          onChange={(e) => inputHanlde(e)}
        />
        <button onClick={SearchHandle}>Search</button>
        {/* <h3>{prevInputValue}</h3> */}
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Email</th>
              <th scope="col">Controller</th>
            </tr>
          </thead>
          <tbody>
            {dataAPI.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.contactNumber}</td>
                  <td>{data.dob}</td>
                  <td>{data.email}</td>
                  <td>
                    <Link
                      to={`/apidata/${data.id}`}
                      className="btn btn-primary"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Outlet />
      </div>
    </>
  );
};

export default APIdata;
