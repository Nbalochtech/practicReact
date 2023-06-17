// import Movie from "./components/Movie";
import Navbar from "./components/general/Navbar";
// import movies from "./movies.json";

import "./App.css";
import APIdata from "./components/apiwork/APIdata";
// import Incdec from "./components/Incdec";
import Userlist from "./components/userlist/Userlist";

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
      {/* <APIdata /> */}
    </>
  );
}

export default App;
