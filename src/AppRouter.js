import 'antd/dist/antd.css';
import './App.css';
import { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/pages/Home';
import { setRouteAction } from './redux/actionCreators/routeAction';
import Header from './components/libs/Header/Header';
import ErrorPage from './components/pages/ErrorPage';
import Footer from './components/libs/Footer/Footter';

function AppRouter({ dispatch }) {
  let location = useLocation();
  useEffect(() => {
    dispatch(setRouteAction(location.pathname));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about'>
            <h1>render about route</h1>
          </Route>
          <Route path='*'>
            <ErrorPage
              errorMessage='PAGE NOT FOUND 404!'
              subMessage='Sorry we couldn’t find your page'
            />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};
export default connect(null, mapDispatchToProps)(AppRouter);
