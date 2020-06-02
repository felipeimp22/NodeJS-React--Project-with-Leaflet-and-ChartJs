import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from 'components/Store/Provider';
import RoutesPrivate from 'components/Routes/Private/Private';
import Home from './Home/Home';
import Login from './Login/Login';
import ChartPage from '../pages/Chart/Chart'
import PagesProfile from './Profile/Profile'
import PagesMap from './Map/Map'
import PagesRegister from './Register/Register'
const Routes = () => (
  <Router>
    <StoreProvider>
      <Switch>

        <Route path="/login" component={Login} />

        <Route path="/register" component={PagesRegister} />

        <RoutesPrivate path="/profile" component={PagesProfile} />

        <RoutesPrivate path="/map" component={PagesMap} />


        <RoutesPrivate path="/chart" component={ChartPage} />

        <RoutesPrivate path="/" component={Home} />

      </Switch>
    </StoreProvider>
  </Router>
)


export default Routes;
