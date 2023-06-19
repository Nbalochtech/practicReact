import React from "react";
import { useNavigate } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <br />
      <br />
      <div class="card text-center ">
        <div class="card-header bold bg-danger text-light">404 Page</div>
        <div class="card-body ">
          <h5 class="card-title">Page not Found</h5>
          <p class="card-text">
            Sorry! there is an Error. Which is not Found the Page
          </p>
          <button class="btn btn-primary" onClick={() => navigate(-1)}>
            <Icon.Arrow90degLeft size={20} /> Go Back
          </button>
        </div>
        <div class="card-footer bg-danger text-light">www.google.com</div>
      </div>
    </div>
  );
};

export default Error;
