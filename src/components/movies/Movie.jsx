import { Link, Outlet } from "react-router-dom";

// import "./movie.css";
const Movie = ({ imdbID, index, title, year, img }) => {
  return (
    <>
      <div className="col-sm" style={{ padding: 12 }}>
        <div className="card" style={{ width: 240 }}>
          <Link to={imdbID} key={index}>
            <img
              className="card-img-top cardImg"
              src={img}
              alt={title}
              style={{ width: 200, margin: 20, height: 250 }}
            />
            <div className="card-body">
              <h5 className="card-title" > {title}</h5>
              <p className="card-text">
                <b>Year:</b>
                {year}
              </p>
              <p>ID: {imdbID}</p>
            </div>
          </Link>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Movie;
