// import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { useContext, useEffect, useState } from "react";
import { SendData } from "../../App";

const ApiDetails = () => {
  const contxt = useContext(SendData);
  const navigation = useNavigate();
  const { empId } = useParams();
  const [empApi, setEmpApi] = useState({});
  useEffect(() => {
    async function getEmp() {
      const apiLink = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${empId}`
      );
      const res = await apiLink.json();
      setEmpApi(res[0]);
    }
    getEmp();
  }, [empId]);
  console.log(contxt.userData.isMarri);
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <div className="card p-3 py-4">
              <div className="text-center">
                <img
                  src={empApi.imageUrl}
                  alt={empApi.id}
                  width="100"
                  className="rounded-circle"
                />
              </div>
              <div className="text-center mt-3">
                <span className="bg-secondary p-1 px-4 rounded text-white">
                  {empApi.age}
                </span>
                <h5 className="mt-2 mb-0">
                  {empApi.firstName} {empApi.lastName}
                </h5>
                <span>{empApi.dob}</span>
                <div className="px-4 mt-1">
                  <p className="fonts">{empApi.email}</p>
                </div>
                <div className="buttons">
                  <button className="btn btn-outline-primary px-4">
                    {empApi.contactNumber}
                  </button>
                  <br />
                  <br />
                  <button
                    className="btn btn-warning px-5 ms-3"
                    onClick={() => navigation(-1)}
                  >
                    <Icon.Arrow90degLeft size={20} /> Go Back
                  </button>
                  <h4>{contxt.allData}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApiDetails;
