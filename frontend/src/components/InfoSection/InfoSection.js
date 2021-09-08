import React from 'react';
import './InfoSection.css';

import cellPhone from '../../assets/icons/info-cellPhone.png';
import watsUp from '../../assets/icons/info-watsUp.png';
import message from '../../assets/icons/info-message.png';
import vk from '../../assets/icons/vk.png';
import instagram from '../../assets/icons/instagram.png';
import telegram from '../../assets/icons/telegram.png';


const InfoSection = () => {
  return (
    <section className="infoSection">
        <div className="container">
          <h3 className="infoSection__title">Контакты и наши данные</h3>

          <div className="infoContacts__wrapper">
            <div className="infoContact__item">
              <img src={cellPhone} alt="contacts" className="infoContact__icon"/>
              <div>
                <p>+9960550245574 </p>
                <p>+9960550245574</p>
              </div> 
            </div>

            <div className="infoContact__item">
              <img src={watsUp} alt="contacts" className="infoContact__icon"/>
              <div>
                <p>+9960550245574 </p>
                <p>+9960550245574</p>
              </div>   
            </div>

            <div className="infoContact__item">
              <img src={message} alt="contacts" className="infoContact__icon"/>
              <div>
                <p>+venskiy-beer@gmail.com </p>
                <p>+brauer_kg@gmail.com</p>
              </div>  
            </div>
          </div>

          <div className="deliveryInfo__wrapper">
            <div className="deliveryInfo__item">
              <h3>Доставка</h3>
              <p>- Мы осуществляем доставку по всему Кыргызстану. </p>
              <p>- Также вы можете воспользоваться услугами частных курьеров </p>
              <p>- Доставка в другие области осуществляется с соглосованием </p>
            </div>
            <div className="deliveryInfo__item deliveryInfo__item__center">
              <h3>Оплата</h3>
              <p>- Вы можете оплатить заказ наличными или картой, если забираете 
                  его в одном изпунктов самовывоза или с нашего склада.
              </p>
            </div>
            <div className="deliveryInfo__item">
              <h3>Адреса:</h3>
              <p>- г. Бишкек пр. Чуй 5/1 </p>
              <p>- г. Бишкек пр. Чуй 5/1 </p>
            </div>
          </div>
        </div>

        <div className="socialWeb">
          <h3>Следите за нами в социальных сетях</h3>
          <div className="socialWeb__icons">
            <img src={vk} alt="vk"/>
            <img src={instagram} alt="instagram"/>
            <img src={telegram} alt="telegram"/>
          </div>
        </div>
    </section>
  )
}

export default InfoSection;