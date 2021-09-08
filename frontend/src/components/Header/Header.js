import React from 'react';
import './Header.css';
import logo from '../../assets/img/logo.png';

const Header = () => {
  return (
    <header className="Header">
    <div className="container">
      <div className="Header__top">
        <div className="Header__number">+9960550245574 <br/> +9960550245574</div>
        <div className="logo__img"><img src={logo} alt="Logo" style={{width: "80px", height: "80px"}}/></div>
        <div className="Header__message"> Адрес: <br /> г. Бишкек <br />  пр. Чуй 5/1</div>
      </div>
    </div>
    </header>
  )
}

export default Header