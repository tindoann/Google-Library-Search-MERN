import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import AppBar from "./components/AppBar";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div className="container">
        <AppBar />
        <Wrapper>
          <Route path="/" exact component={Search} />
          <Route path="/search" component={Search} />
          <Route path="/saved" component={Saved} />
        </Wrapper>
      </div>
    </Router>
  );
};

export default App;