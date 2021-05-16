import Home from './Components/Home';
import Login from './Components/Login';
import {BrowserRouter as Router,
        Switch,
        Route,
      } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className="App">
    
      <Router>
        <Switch>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>
        
        </Switch>

      </Router>
    </div>
  );
}

export default App;
