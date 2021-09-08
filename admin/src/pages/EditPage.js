import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import './Pages.css';

const EditPage = () => {
  const { authHook } = useContext(AuthContext);

  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: '',
    lat: '',
    lng: ''
  });

  const [users, setUsers] = useState([]);

  const formChangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const saveToMap = async () => {
    try {
      await axios.post('http://localhost:5000/map', { ...form },
        { headers: { Authorization: `Bearer ${authHook.token}` } }
      )
    } catch (e) {
      console.log(e)
    }
  }

  const getUsers = async () => {
    try {
      const data = await axios.get('http://localhost:5000/map/users',
        { headers: { Authorization: `Bearer ${authHook.token}` } }
      ).then(res => res.data)
      setUsers(data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <section>
      <div className="container" style={{ padding: "50px 10px" }}>
        <h1>Редактирование карты</h1>
        <form onSubmit={e => e.preventDefault()} className="form__createMap">
          <label>Имя</label><input type="text" name="name" value={form.name} onChange={formChangeHandler} />
          <label>Адресс</label><input type="text" name="address" value={form.address} onChange={formChangeHandler} />
          <label>Телефон</label><input type="number" name="phone" value={form.phone} onChange={formChangeHandler} step="any" placeholder="phone" />
          <label>Широта</label><input type="number" name="lat" value={form.lat} onChange={formChangeHandler} step="any" placeholder="lat" />
          <label>Долгота</label><input type="number" name="lng" value={form.lng} onChange={formChangeHandler} step="any" placeholder="lng" />
          <button className="btn waves-effect waves-light" style={{ marginTop: '20px' }} onClick={saveToMap}>Добавить на карту</button>
        </form>

        <button className="btn waves-effect waves-light lime darken-4" style={{ marginTop: '30px' }} onClick={getUsers}>Показать пользователей</button>
          <table style={{marginTop: '20px'}}>
            <thead>
              <tr>
                <th>№</th>
                <th>Имя</th>
                <th>Адрес</th>
              </tr>
            </thead>
            <tbody>
              {users.map((el, index)=> (
                <tr key={el.id}>
                  <td>{index + 1}</td>
                  <td>{el.name}</td>
                  <td>{el.address}</td>
                </tr>
              ))}
            </tbody>
          </table>

      </div>
    </section>
  );
}

export default EditPage;
