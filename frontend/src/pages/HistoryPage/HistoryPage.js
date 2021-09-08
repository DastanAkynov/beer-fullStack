import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios';

import Header from '../../components/Header/Header'
import InfoSection from '../../components/InfoSection/InfoSection'
import { AuthContext } from '../../context/AuthContext';
import './HistoryPage.css';




const HistoryPage = () => {
  const [history, setHistory] = useState([]);
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:5000/api/order/${userId}`)
        .then(res => setHistory(res.data))
    }
  }, [userId])


  return (
    <div>
      <Header />

      <div className="container">
        <div className="history">
          {history.length > 0 ?
          <table border="1" width="100%" className="history__table">
            <thead>
              <tr>
                <th>№</th>
                <th>Дата заказа</th>
                <th>Список заказов </th>
              </tr>
            </thead>
    
            <tbody>
              {history.map((el, index) => {
                const date = new Date(el.date).toLocaleDateString();   
                const time = new Date(el.date).toLocaleTimeString(); 
                return (
                  <tr key={el._id} >
                    <td>{index + 1}</td>
                    <td>{date} <div>{time}</div></td> 
                  {el.list && el.list !== 0 ?
                    <td className="table__orderList">{el.list.map((item, index) => {
                      return (
                        <div key={item._id} className="table__orderList__el">
                          <div>~{index+1}~</div>
                          <div>Название: <span>{item.name}</span></div>
                          <div>Колличество: <span>{item.counter}</span></div>
                          <div>Цена: <span>{item.price}</span></div>
                          <div>Сумма: <span>{item.sum}</span></div>
                        </div>

                      )
                    })}</td>
                    : <div>Null</div>
                  }
                  </tr>
                )
              })}
            </tbody>
          </table>
          : <h1>История покупок пуста</h1>}
        </div>
      </div>


      <InfoSection />
    </div>
  )
}

export default HistoryPage;