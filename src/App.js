import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import "assets/scss/style.scss";
import Landingpage from 'pages/Landingpage';
import example from 'pages/example';
import example1 from 'pages/example1';
import DetailsPage from 'pages/DetailsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Landingpage}></Route>
        <Route exact path="/properties/:id" component={DetailsPage}></Route>
        <Route exact path="/example" component={example}></Route>
        
        <Route exact path="/example1" component={example1}></Route>
      </Router>
    </div>
    
  );
}

export default App;
