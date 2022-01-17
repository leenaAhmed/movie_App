import { Route } from 'react-router-dom';

import Movies from './components/movies';
import Favorites from './components/favorites';

import './App.css';

function App() {
  return (
    <>
      <Route path='/movies' component={Movies} />
      <Route path='/favorites' component={Favorites} />
    </>
  );
}

export default App;
