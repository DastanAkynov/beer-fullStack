import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import BasketPage from './pages/BasketPage/BasketPage';
import Layout from './components/Layout/Layout';
import LocationPage from './pages/LocationPage/LocationPage';
import AboutPage from './pages/AboutPage/AboutPage';
import AuthPage from './pages/AuthPage/AuthPage';
import OrderPage from './pages/OrderPage/OrderPage';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';
import { withRouter } from "react-router";
import HistoryPage from './pages/HistoryPage/HistoryPage';
import { useAmount } from './hooks/useAmount';
import { useBasketCounter } from './hooks/useBasketCounter';
import axios from 'axios';

axios.interceptors.response.use((response) => {
  if(response && response.data && response.data.message) {
    alert(response.data.message)
  }
  return response;
}, (e) => {
  if(e.response && e.response.data && e.response.data.message) {
    alert(e.response.data.message)
  }
});


const App = props =>  {
  const {userId, token, login, logout} = useAuth();
  const basketCounterHook = useBasketCounter()
  const isAuth = !!token;

  const amountHook = useAmount();

  return (
      <Switch>

        <AuthContext.Provider value={{userId, token, login, logout, isAuth, props,
                                      amountHook, basketCounterHook}} >
        <Layout>
          <Route path="/" exact component={MainPage}/>
          <Route path="/catalog" component={CatalogPage}/>
          <Route path="/location" component={LocationPage}/>
          <Route path="/basket" component={BasketPage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/auth" component={AuthPage}/>
          <Route path="/order" component={OrderPage}/>
          <Route path="/history" component={HistoryPage}/>
        </Layout>
        </AuthContext.Provider>
      </Switch>
  )
}

export default withRouter(App);
