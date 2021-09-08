import React from 'react';
import Header from '../../components/Header/Header';
import InfoSection from '../../components/InfoSection/InfoSection';
import './AboutPage.css';

import factory_1 from '../../assets/img/factory-1.jpg';
import factory_2 from '../../assets/img/factory-2.jpg';
import water from '../../assets/img/water.png';
import hmel from '../../assets/img/hmel-2.png';
import solod_1 from '../../assets/img/solod-1.png';
import solod_2 from '../../assets/img/solod-2.png';
import history from '../../assets/img/history.jpg';

const AboutPage = () => {
  return (
    <div>
      <Header />

      <div className="container">
        
        <section className="factory">
          <h1>Производство</h1>
          <div className="factory__content" >
              <div className="left__factory__content" >
                <div><img src={factory_1} className="factory__img factory__img__1" alt="factory_1"/></div>
                <img src={factory_2} className="factory__img" alt="factory_2" />
              </div>
              <div className="right__factory__content">
                <p className="factory__content__text">Свойства и Особенности Нефильтрованного пива:
              Пиво «Венское нефильтрованное» сварено по старинным традиционным технологиям с использованием очищенной артезианской воды, элитных сортов солода и хмеля из Чехии, и немецких дрожжей - пиво сварено на современном высокотехнологичном оборудовании.
              При варке пива мы строго придерживаемся «Закона о чистоте пива (DasReinheitsgebot) 1516 года» (В составе только: вода, солод, хмель и дрожжи).
              «Венское нефильтрованное» пиво Не подвергают процессу фильтрации, вследствие чего из него не удаляют живую дрожжевую культуру, которая придает этому сорту пива уникальный неповторимый аромат и вкус, а также наделяет пиво различными полезными свойствами. По этой причине в пиве «Венское нефильтрованное» сохраняются все витамины и полезные микроэлементы!
              Разливное пиво «Венское нефильтрованное» не проходит процесс пастеризации, и для пива не используются консервирующие добавки - Пиво от нашей Пивоварни Brauer является настоящим ЖИВЫМ Пивом !!!</p>  
              </div>
          </div>
        </section>

        <section className="structure">
          <h2>Состав</h2>
          <div className="structure__list">
            <div className="structure__item">
              <h3>Вода подготовленная</h3>
              <img src={water}  alt="water"/>
            </div>
            <div className="structure__item">
              <h3>Хмель</h3>
              <img src={hmel}  alt="hmel"/>
            </div>
            <div className="structure__item">
              <h3>Солод пивоваренный ячменный светлый</h3>
              <img src={solod_1}  alt="solod_1"/>
            </div>
            <div className="structure__item">
              <h3>Солод пивоваренный ячменный карамельный</h3>
              <img src={solod_2}  alt="solod_2"/>
            </div>
          </div>         
        </section>

        <section className="history">
          <h1>История</h1>
          <div className="history__content">
            <p className="history__title__top">У венского лагера очень интересная судьба – рожденный в Австрии, он успел иммигрировать в Мексику,
                побывать в дореволюционной Самаре и под видом «Жигулевского» завоевать народную любовь граждан Советского Союза.
                Московская Пивоваренная Компания возродила венский лагер в линейке «Хамовников». Об особенностях сорта и новом прочтении
                традиций нам рассказали главный пивовар Михаил Ершов и менеджер проекта «Хамовники» Севак Зейналян.
            </p>
            <div className="history__content__inner">
              <img src={history} alt="history"/>
              <p>У венского лагера очень интересная судьба – рожденный в Австрии, он успел иммигрировать в Мексику,
                побывать в дореволюционной Самаре и под видом «Жигулевского» завоевать народную любовь граждан Советского Союза.
                Московская Пивоваренная Компания возродила венский лагер в линейке «Хамовников». Об особенностях сорта и новом прочтении
                традиций нам рассказали главный пивовар Михаил Ершов и менеджер проекта «Хамовники» Севак Зейналян.</p>
            </div>

          </div>
        </section>

      </div>


        <InfoSection />

      
    </div>
  )
}

export default AboutPage;




// import React from 'react'
// import Header from '../../components/Header/Header'
// import InfoSection from '../../components/InfoSection/InfoSection'

// const AboutPage = () => {
//   return (
//     <div>
//       <Header />


//       <InfoSection />
//     </div>
//   )
// }

// export default AboutPage;
