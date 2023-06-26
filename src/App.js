import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/general/Navbar";
import About from "./components/general/About";
import Text from "./components/general/Text";
import Songs from "./components/general/Songs";
import Pictures from "./components/general/Pictures";
import ShowMovies from "./components/movies/ShowMovies";
import Incdec from "./components/general/Incdec";
import Userlist from "./components/userlist/Userlist";
import APIdata from "./components/apiwork/APIdata";
import Error from "./components/general/Error";
import MovieDetails from "./components/movies/MovieDetails";
import ApiDetails from "./components/apiwork/ApiDetails";
import UsecustomHooks from "./components/customHooks/UsecustomHooks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext } from "react";

const SendData = createContext();

function App() {
  let allData = "Noman Baloch";
  let userData = { name: "Noman Baloch", age: 30, isMarri: false };

  return (
    <>
      <SendData.Provider value={{ allData, userData }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/song" element={<Songs />} />
              <Route path="/pic" element={<Pictures />} />
            </Route>
            <Route path="/cstmHooks" element={<UsecustomHooks />} />
            <Route path="/about" element={<About />} />
            <Route path="/text" element={<Text />} />
            <Route path="/movies" element={<ShowMovies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="/apidata" element={<APIdata />} />
            <Route path="/apidata/:empId" element={<ApiDetails />} />
            <Route path="/incdec" element={<Incdec className={App} />} />
            <Route path="/users" element={<Userlist />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </SendData.Provider>
    </>
  );
}

export default App;
export { SendData };
