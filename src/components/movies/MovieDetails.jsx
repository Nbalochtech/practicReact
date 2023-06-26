// import React, { useEffect, useState } from 'react'
import movies from "./movies.json";
import { useParams, useNavigate } from 'react-router-dom';
import * as Icon from "react-bootstrap-icons";


const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const data = movies.filter(item => item.imdbID.includes(movieId));
  return (
    <>
      <h1>Movie details</h1>
      {data.map((i, index) => {
        return (

          <div className="card text-center">
            <div className="card-header">
              Movie Details
            </div>
            <div className="card-body" key={index}>
              <img src={i.Poster} className="img-fluid" alt={i.Title}></img>
              <h5 className="card-title">{i.Title}</h5>
              <p className="card-text">{i.Year}</p>
              <button className="btn btn-primary" onClick={() => navigate(-1)}>
                <Icon.Arrow90degLeft size={20} /> Go Back
              </button>
            </div>
          </div>)
      })}

    </>
  )
}

export default MovieDetails
