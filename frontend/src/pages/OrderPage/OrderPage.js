import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import './OrderPage.css';
import { withRouter } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


const OrderPage = (props) => {
  const [beerList, setBeersList] = useState([])
  const { userId, basketCounterHook } = useContext(AuthContext);

  const [orderData, setOrderData] = useState({
    name: '',
    phone: '',
    address: '',
    info: ''
  })

  const saveBeersToState = () => {
    const beerListArr = [];
    const newBeers = []
    Object.keys(localStorage).map((key, index) => {                                    //записывает данные при первом рэндоре
      if(key.includes('userData')) return null
      const beers = JSON.parse(localStorage[key])
      newBeers.push(`${index + 1}): наз-е ${beers.name}, кол-во: ${beers.counter} , сумма: ${beers.sum} сом.`)
      beerListArr.push({name: beers.name, counter: beers.counter, price: beers.price, sum: beers.sum})
    })
    setOrderData({...orderData, info: newBeers.join('; ')})
    setBeersList(beerListArr)
  }

  useEffect(() => {
    saveBeersToState()
  }, [])


  const changeOrderData = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value })
  }

  const sendOrderData = (e) => {
    console.log(beerList)
    e.preventDefault()
    axios.post('http://localhost:5000/api/order', {list: beerList, id: userId, userInfo: orderData} ).then(res => {
      props.history.push('/')

      Object.keys(localStorage).map((key, index) => {     //находит все ключи в localstorage                     
        if(key.includes('userData')) return null          //Кроме ключа userData
        localStorage.removeItem(key);                     //удаляет все ключи             
      })   
    })
    basketCounterHook.setBasketProducts(0)
  }


  return (
    <div>
      {console.log(beerList)}
      <Header />
    <div className="applicationPage">
      <div className="container">
        <h1>Оформление заявки</h1>
        <p className="applicationPage__subtitle application__waring">Для окончательного оформление заказа, заплните форму <strong>"Получатель"</strong> и нажмите на кнопку <strong>"Отправьте заявку."</strong><br />
              После этого наш оператор свяжется с вами.
          </p>
        
        <section className="application__products">
          <h2>Список продуктов</h2>
          <p className="application__waring">Проверьте ваш заказ еще раз на наличии ошибки</p>
          <div className="application__products__list">
            {beerList.map((el, index) => {
              return (
                <div key={el.name + index} className="application__products__el">
                  <strong>{index + 1}</strong>
                  <p>Название: <strong>{el.name}</strong></p>
                  <p>Колличество: <strong>{el.counter}</strong> </p>
                  <p>Цена: <strong>{el.price}</strong> </p>
                  <p>Сумма: <strong>{el.sum}</strong></p>
                </div>   
              )
            })}
          </div>
        </section>
   
        <section className="application__client">
          <h2>Получатель</h2>
          <p className="application__waring">Заполните форму вашими контактными данными, чтобы мы смогли связаться с вами.</p>
          <form className="application__form">
            <div className="application__form__item">
              <h5>Имя:</h5>
              <input type="text" name="name" value={orderData.name} onChange={changeOrderData} placeholder="Введите имя"/>
            </div>
            <div className="application__form__item">
            <h5>Телефон:</h5>
              <input type="text" name="phone" value={orderData.phone}  onChange={changeOrderData} placeholder="Введите номер телефона"/>
            </div>
            <div className="application__form__item">
              <h5>Адрес доставки:</h5>
              <input type="text" name="address" value={orderData.address}  onChange={changeOrderData} placeholder="Введите адрес"/>
            </div>
            <button onClick={sendOrderData}>Отправить заявку</button>
          </form>
        </section>
        
        {console.log(orderData.phone)}
      </div>
      <Menu />
    </div>
    </div>
  )
}

export default withRouter(OrderPage);
