import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "./components/Movies/movieList/index";
import Navbar from "../navbar/navbar";
import MoviesDetails from "./components/Movies/movieDetails/index";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
     <Navbar/>
    </>
  );
}

export default App;
