// import Movie from "./components/Movie";
import Navbar from "./components/Navbar";
// import movies from "./movies.json";

import "./App.css";
// import Incdec from "./components/Incdec";
import Userlist from "./components/Userlist";

function App() {
  return (
    <>
      <Navbar />
      {/* <Text />
      <div className="container">
        <div className="row">
          {movies.map((movie, index) => {
            return (
              <Movie
                key={index}
                title={movie.Title}
                year={movie.Year}
                img={movie.Poster}
              />
            );
          })}
        </div>
      </div>
      <Incdec className={App} /> */}
      <Userlist />
    </>
  );
}

export default App;
