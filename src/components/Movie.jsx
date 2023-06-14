// import "./movie.css";
const Movie = (props) => {
  return (
    <>
      <div className="col-sm" style={{ padding: 12 }}>
        <div className="card" style={{ width: 240 }}>
          <img
            className="card-img-top cardImg"
            src={props.img}
            style={{ width: 200, margin: 20, height: 250 }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              <b>Year:</b>
              {props.year}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
