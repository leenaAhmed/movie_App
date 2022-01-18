import { Redirect, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar/navbar';
import Footer from './Footer/Footer';
import Movies from './components/movies';
import Favorites from './components/favorites';
import MoviesDetails from './components/movedetails/index';

import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path='/Movies' component={Movies} />
        <Route path='/Favorite' component={Favorites} />
        <Route path='/movies-details/:id' component={MoviesDetails} />
        <Redirect from='/' exact to='/Movies' />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
