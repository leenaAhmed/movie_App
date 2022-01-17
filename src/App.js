import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "./components/Movies/movieList/index";
import Navbar from "../navbar/navbar";
import MoviesDetails from "./components/Movies/movieDetails/index";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
     <Navbar/>
    </>
  );
}

export default App;
