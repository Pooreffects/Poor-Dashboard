import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Home from './pages/home/Home';
import './Global.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './pages/user-list/UserList';
import User from './pages/user/User';
import NewUser from './pages/new-user/NewUser';

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/new-user">
            <NewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
