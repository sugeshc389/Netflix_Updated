import React from 'react';
import './App.css';
import Banner from './Component/Banner/Banner';
import NavBar from './Component/NavBar/NavBar';
import Rowpost from './Component/Rowpost/Rowpost';
import {originals,action,comedyMovies,horrorMovies,romanceMovies} from './url';


function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals'/>
      <Rowpost url={action} title='Action' isSmall/>
      <Rowpost url={comedyMovies} title='Comedy MOvies' isSmall/>
      <Rowpost url={horrorMovies} title='Horror Movies' isSmall/>
      <Rowpost url={romanceMovies} title='Romance Mo  vies' isSmall/>
    </div>
  );
}

export default App;
