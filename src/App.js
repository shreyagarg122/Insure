import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Account from './Account';
import Blog from './Blog';
import Insure from './Insure';
import Navbar from './Navbar';
import Plans from './Plans';
import Work from './Work';

function App(){
  return(
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Insure />
            </Route>
            <Route exact path="/work">
              <Work />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/account">
              <Account />
            </Route>
            <Route exact path="/plans">
              <Plans />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;