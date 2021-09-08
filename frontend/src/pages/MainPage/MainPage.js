import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainPage.css'; 
import logo from '../../assets/img/logo.png'
import video from '../../assets/img/video-test.png'
import googleMapIcon from '../../assets/img/googleMapIcon.png'
import InfoSection from '../../components/InfoSection/InfoSection';

const MainPage = () => {
  return (
    <div>

      <header className="header">
      <div className="container">
        <div className="header__top">
          <div className="header__number">+9960550245574 <br/> +9960550245574</div>
          <div className="logo__img"><img src={logo} alt="Logo" style={{width: "80px", height: "80px"}}/></div>
          <div className="header__message"> Адрес: <br/> г. Бишкек пр. Чуй 5/1</div>
        </div>
        <div className="line"></div>
          <div className="header__title">~Венская пивоварня~</div>
          <div className="header__content">
            <img className="header__video" src={video} alt="video" />
            <h3 className="header__text">
            ~ Настоящее живое пиво <br /><br />
            ~ Современное высокотехнологическое <br /> оборудование <br /><br />
            ~ Лучшие  европейские сорта <br /> солода и хмеля <br /><br />
            ~ Только натуральные продукты <br />           
            </h3>
          </div>
        </div>
      </header>

      <section>
        <div className="container">
            <div className="mainCard__wrapper">
            <NavLink to="/catalog" className="mainCard__item card__3">
                  <h4 className="mainCard__title">Каталог пива</h4>
              </NavLink>
              <NavLink to="/about" className="mainCard__item card__1">
                  <h4 className="mainCard__title">Узнайте больше о нас</h4>
              </NavLink>
              <NavLink to="#" className="mainCard__item card__2">
                  <h4 className="mainCard__title">Сотрудничество</h4>
              </NavLink>
              <NavLink to="#" className="mainCard__item card__4">
                  <h4 className="mainCard__title">Наши контакты</h4>
              </NavLink>
              <NavLink to="#" className="mainCard__item card__5">
                  <h4 className="mainCard__title">Акции и новости</h4>
              </NavLink>
              
            </div>
          </div>
      </section>

      <section className="location">
        <div className="container">
          <div className="location__wrapper">

            <div className="location__left">
              <h3 className="location__title">Точки продаж </h3>
              <div className="location__list">
                <div className="location__item">
                  <h4>Адрес:</h4>
                  <p>г. Бишкек ул. Боконбаева 25</p>
                  <h4>Телефон:</h4>
                  <p>0702 44 55 26</p>
                  <h4>Менеджер по продажам:</h4>
                  <p>C. Андреев</p>
                </div>
                <div className="location__item">
                  <h4>Адрес:</h4>
                  <p>г. Бишкек ул. Боконбаева 25</p>
                  <h4>Телефон:</h4>
                  <p>0702 44 55 26</p>
                  <h4>Менеджер по продажам:</h4>
                  <p>C. Андреев</p>
                </div>
              </div>
            </div>

            <div className="location__right">
              <h3 className="location__title">Перейти в Google Map </h3>
              <img src={googleMapIcon} className="location__icon" alt="googleMap"/>
            </div>

          </div>           
        </div>
      </section>

      <InfoSection />

      
    </div>
  )
}
export default MainPage;





      

