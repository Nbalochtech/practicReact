// import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import * as Icon from "react-bootstrap-icons";
import { useEffect, useState } from 'react';

const ApiDetails = () => {
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
    }, []);
    console.log(empApi);
    return (
        <>
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-7">
                        <div className="card p-3 py-4">
                            <div className="text-center">
                                <img src={empApi.imageUrl} width="100" className="rounded-circle" />
                            </div>
                            <div className="text-center mt-3">
                                <span className="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                                <h5 className="mt-2 mb-0">{empApi.firstName} {empApi.lastName}</h5>
                                <span></span>
                                <div className="px-4 mt-1">
                                    <p className="fonts">Consectetur adipiscing elit, sed do eiusmod </p>
                                </div>
                                <div className="buttons">
                                    <button className="btn btn-outline-primary px-4">Message</button>
                                    <button className="btn btn-primary px-4 ms-3">Contact</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApiDetails
