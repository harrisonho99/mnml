import 'antd/dist/antd.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
function AppRouter() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default AppRouter;
