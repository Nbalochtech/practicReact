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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/song" element={<Songs />} />
            <Route path="/pic" element={<Pictures />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/text" element={<Text />} />
          <Route path="/movies" element={<ShowMovies />} />
          <Route path="/incdec" element={<Incdec className={App} />} />
          <Route path="/users" element={<Userlist />} />
          <Route path="/apidata" element={<APIdata />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
