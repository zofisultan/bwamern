import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import "assets/scss/style.scss";
import Landingpage from 'pages/Landingpage';
import example from 'pages/example';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Landingpage}></Route>
        <Route exact path="/example" component={example}></Route>
      </Router>
    </div>
    
  );
}

export default App;
