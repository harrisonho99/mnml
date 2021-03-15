import 'antd/dist/antd.css';
import './App.css';
import { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/pages/Home';
import { setRouteAction } from './redux/actionCreators/routeAction';
import Header from './components/libs/Header/Header';
import Footer from './components/libs/Footer/Footter';

function AppRouter({ dispatch }) {
  let location = useLocation();
  useEffect(() => {
    console.log(setRouteAction());
    dispatch(setRouteAction(location.pathname));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about'>
          <h1>render about route</h1>
        </Route>
        <Route path='*'>
          <h1>render error route</h1>
        </Route>
      </Switch>
      <Footer />
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};
export default connect(null, mapDispatchToProps)(AppRouter);