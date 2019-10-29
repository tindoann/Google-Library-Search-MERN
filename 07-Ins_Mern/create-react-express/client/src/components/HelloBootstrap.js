/* eslint-disable import/first */

import React from "react";; 
import AppBar from './AppBar'; 
import Jumbotron from './Jumbotron'; 
import SearchCard from './SearchCard'; 
// import ResultCard from './ResultCard'; 

function NavBar() {
return (
<div className="container">
  <AppBar />
  <Jumbotron />
  <SearchCard />
  {/* <ResultCard /> */}
</div>
 );
}
export default NavBar;

