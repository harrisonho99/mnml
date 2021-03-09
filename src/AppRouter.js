import 'antd/dist/antd.css';
import './App.css';
import { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/Home';
import { setRouteAction } from './redux/actionCreators/routeAction';
function AppRouter({ dispatch }) {
  let location = useLocation();
  useEffect(() => {
    console.log(setRouteAction());
    dispatch(setRouteAction(location.pathname));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='*'>
          <Home />
        </Route>
      </Switch>
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};
export default connect(null, mapDispatchToProps)(AppRouter);
