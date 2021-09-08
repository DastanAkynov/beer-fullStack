import React, {useContext} from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Navigation.css';

const Navigation = () => {

  const {authHook, isAuth} = useContext(AuthContext);
  return (
    
    <nav className="nav grey darken-2">
      {authHook.userRole && authHook.userRole == 'ADMIN'? 
      <ul className="nav-wrapper container nav__list">     
        <li><NavLink to="/products/create">Добавление товара</NavLink></li>
        <li><NavLink to="/edit">Редактирование карты</NavLink></li>        
        <li><NavLink to="/orders">Истории заказов</NavLink></li>
        <li><NavLink to="/auth">Авторизация</NavLink></li> 
        <li><a onClick={() => authHook.logout()}>Выйти</a></li>
      </ ul>
      : 
        <ul className="nav-wrapper container nav__list">       
        <li><NavLink to="/location">Карта</NavLink></li>
        {
        isAuth ?<li><NavLink to="/auth">Авторизация</NavLink></li> 
        :
        <li><a onClick={() => authHook.logout()}>Выйти</a></li>
        }
      </ ul>
      
      }
    </nav>
    
  );
}

export default Navigation;
