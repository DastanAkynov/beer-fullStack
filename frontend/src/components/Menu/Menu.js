import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css'
import home from '../../assets/icons/home.svg';
import catalog from '../../assets/icons/catalog.svg';
import location from '../../assets/icons/location.svg';
import contact from '../../assets/icons/contact.svg';
import basket from '../../assets/icons/basket.svg';
import search from '../../assets/icons/search.svg';
import user from '../../assets/icons/user.svg';
import exit from '../../assets/icons/exit.svg';
import { AuthContext } from '../../context/AuthContext';


const Menu = () => {
  const {logout, isAuth, basketCounterHook} = useContext(AuthContext);


  const exitHandler = () => {
    logout()
  }


  return (
    <div className="menu">
      <nav className="nav">
        <NavLink to="/" className="nav__item"><img src={home} alt="Home" /><div className="menu__title">Главная</div></NavLink>
        <NavLink to="/catalog" className="nav__item"><img src={catalog} alt="Catalog" /><div className="menu__title">Каталог пива</div></NavLink>
        <NavLink to="/location" className="nav__item"><img src={location} alt="Location" /><div className="menu__title">Точки продаж</div></NavLink>
        <NavLink to="#" className="nav__item"><img src={contact} alt="Contact" /><div className="menu__title">Контакты</div></NavLink>
        <NavLink to="#" className="nav__item"><img src={search} alt="Search" /><div className="menu__title">Поиск</div></NavLink>
        
        <NavLink to="/basket" className="nav__item basket__icon">
          { isAuth ?
            <div className="basket__iconCounter">{Object.keys(basketCounterHook.basketProducts).length}</div>
            : null
          }
          <img src={basket} alt="Basket" />
          <div className="menu__title">Корзина</div>
          </NavLink>
          
        {isAuth ?
        <NavLink to="/" className="nav__item" onClick={exitHandler}><img src={exit} alt="User" /><div className="menu__title">Выйти</div></NavLink>
        :
        <NavLink to="/auth" className="nav__item"><img src={user} alt="User" /><div className="menu__title">Войти</div></NavLink>
        }
        
      </nav>
    </div>
  )
}

export default Menu;