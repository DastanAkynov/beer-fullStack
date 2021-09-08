import React, { useEffect, useState, useContext } from 'react';
import axios from "axios";
import { AuthContext } from '../context/AuthContext';



const OrdersPage = () => {
  const [ordersHistory, setOrdersHistory] = useState([]);
  const { authHook } = useContext(AuthContext);

  const getOrders = async () => {
    try {
      await axios.get('http://localhost:5000/api/order',
        { headers: { Authorization: `Bearer ${authHook.token}` } }
      ).then(res => setOrdersHistory(res.data))
    }
    catch (e) {
      console.log(e)
    }
  }


  useEffect(() => {
    getOrders()
  }, [])

  return (
    <div className="container" style={{ padding: "50px 10px" }}>
      <h1>Истории заказов</h1>
      <table >
        <thead>
          <tr>
            <th>№</th>
            <th>Дата заказа</th>
            <th>Покупатель</th>
            <th>Список заказа</th>
          </tr>
        </thead>

        <tbody>
          {ordersHistory.map((order, index) => {
            const date = new Date(order.date).toLocaleDateString();
            const time = new Date(order.date).toLocaleTimeString();
            return (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>{date}<br />{time}</td>
                <td><strong>{order.user && order.user.name ? order.user.name : 'NO NAME'}</strong></td>
                <td>

                  <table>
                    <thead>
                      <tr>
                        <th>№</th>
                        <th>Название</th>
                        <th>Кол-во</th>
                        <th>Сумма</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.list.map((el, idx) => {
                        return (
                          <tr key={el._id}>
                            <td>{idx + 1}</td>
                            <td>{el.name}</td>
                            <td>{el.counter}</td>
                            <td>{el.sum}</td>                            
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>

                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersPage;
