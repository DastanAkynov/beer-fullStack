import React, { useState, useEffect, useContext } from 'react';
import Header from '../../components/Header/Header';
import { NavLink } from 'react-router-dom'
import './BasketPage.css';

import orderIcon_card from '../../assets/icons/orderIcon-card.png';
import orderIcon_mask from '../../assets/icons/orderIcon-mask.png';
import orderIcon_delivery from '../../assets/icons/orderIcon-delivery.png';
import { AuthContext } from '../../context/AuthContext';


const BasketPage = () => {
  const { isAuth, amountHook, basketCounterHook } = useContext(AuthContext);

  const [products, setProducts] = useState({})
  const [totalSum, setTotalSum] = useState(0)

  const increase = (id) => {
    let beers = { ...products }                                     //берет копию
    const beer = { ...beers[id] }                                   //вытаскивает нужный элемент по id в beers
    beers[id].counter = beer.counter + 1                          //Пибавляет счетчик по id в beers
    beers[id].sum = beer.sum + beer.price                         //Пибавляет сумму по id в beers
    setProducts(beers)                                            //Записывает измененный beers в state
    setTotalSum(prevSum => prevSum + beer.price)                  //Пибавляет общюю сумму
    localStorage.setItem([id], JSON.stringify(beers[id]))         //перезаписывает localstorage
  }

  const decrease = async (id) => {
    let beers = { ...products }
    const beer = { ...beers[id] }
    beers[id].counter = beer.counter - 1
    beers[id].sum = beer.sum - beer.price
    setProducts(beers)                                            //Записывает новый beers в state
    setTotalSum(prevSum => prevSum - beer.price)
    localStorage.setItem([id], JSON.stringify(beers[id]))         //перезаписывает localstorage
  }

  const removeBeers = (id) => {
    localStorage.removeItem([id])                                                         //5.1 удаляет элеиент из localStorage
    makeNewBeers()                                                                        //5.2 перерондорит localStorage
    Object.keys(products).map(key => setTotalSum(prev => prev - products[key].sum))       //5.3 убавляет общюю сумму при удалении продукта
    amountHook.getAmount()
    basketCounterHook.refreshBasketCounter()
  }

  const makeNewBeers = async () => {                                                 //
    let data = {}
    await Object.keys(localStorage).map(key => {                                   //записывает данные при первом рэндоре
      if (key.includes('userData')) {                                              //если в localStorage есть userData(token, id), то мы исключаем
        return null
      }
      data[key] = (JSON.parse(localStorage[key]))
    })

    setProducts(data)
    Object.keys(data).map(key => setTotalSum(prev => prev + data[key].sum))         //суммирует в totalSum при первом рэндоре
  }

  useEffect(() => {
    makeNewBeers()
  }, [])

  return (
    <div className="basket__page">
      <div className="basket__page">
        <Header />
        <div className="order__section">
          <div className="container">
            <div className="basket__cards">
              {Object.keys(products).length !== 0 ?
                <div>
                  {Object.keys(products).map(el => {
                    const { _id, name, volume, price, abv, view, color, image, counter, sum } = products[el]
                    return (
                      <div className="basketCard" key={el}>

                        <div className="info__basketCard">
                          <div className="img__wrapper__basketCard"><img className="img__basketCard" src={"http://localhost:5000/" + image} alt="beer" /></div>
                          <div>
                            <h3 className="title__basketCard">{name}</h3>
                            <div className="volume__basketCard"><span>Объем: </span> {volume} л.</div>
                            <div className="volume__basketCard"><span>Крепкость: </span> {abv} л.</div>
                            <div className="volume__basketCard"><span>Вид: </span> {view}</div>
                            <div className="volume__basketCard"><span>Цвет: </span> {color}</div>
                          </div>
                        </div>

                        <div className="price__wrapper">
                          <div className="quantity__sum">
                            Цена:
                            <p>{price} сом</p>
                          </div>

                          <div className="quantity__sum">
                            Колличество
                            <div className="card__counter">
                              <button className="counter__btn" onClick={() => decrease(_id)} disabled={counter === 0 ? true : false}>-</button>
                              <div className="counter__val">{counter}</div>
                              <button className="counter__btn" onClick={() => increase(_id)}>+</button>
                            </div>
                          </div>

                          <div className="quantity__sum">
                            Итого:
                            <p>{sum} сом</p>
                          </div>


                        </div>
                        <button className="remove__basketCard" onClick={() => removeBeers(_id)}>Удалить</button>
                      </div>
                    )
                  })}
                </div>
                : <h3>Для оформления получения заказа прейдите в <NavLink to="/catalog">Каталог продуктов</NavLink> и выберите нужный вам продукт</h3>
              }

              <div className="order__wrapper">
                <div className="order__left order__icons__box">
                  <div className="order__icons__item">
                    <p>Быстрая <br /> доставка</p>
                    <img src={orderIcon_delivery} alt="orderIcon" />
                  </div>
                  <div className="order__icons__item">
                    <p>Безопасность <br /> клиентов</p>
                    <img src={orderIcon_mask} alt="orderIcon" />
                  </div>
                  <div className="order__icons__item">
                    <p>Безналичный <br /> расчет</p>
                    <img src={orderIcon_card} alt="orderIcon" />
                  </div>
                </div>
                <div className="order__right">
                  <h3>Итоговая сумма: _________ {totalSum} сом.</h3>

                  {isAuth === false
                    ?
                    <div className="forbidOrder">
                      <h4 >Для оформления заказа зарегестрируйтесть на нашем сайте</h4>
                      <NavLink to="/auth" className="order__btn">Регстрация</NavLink>
                    </div>
                    :
                    <div>
                      {Object.keys(products).length === 0 ? null :
                      <NavLink to="/order" className="order__btn" >Оформить заказ</NavLink>
                      }
                      <NavLink to="/history" className="order__btn history__btn">Истории покупок</NavLink>
                    </div>
                  }
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BasketPage;






