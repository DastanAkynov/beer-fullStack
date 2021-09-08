import React, { useState, useContext } from 'react'
import { NavLink, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import './AuthPage.css';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';


const AuthPage = () => {
  const { authHook } = useContext(AuthContext);
  const history = useHistory();
  const [form, setForm] = useState({
    name: '124',
    password: '123',
    role: ''
  });



  const formChageHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const loginHandler = async () => {
    try {
      const data = await axios.post('http://localhost:5000/api/auth/admin/login', { name: form.name, password: form.password }).then(res => res.data)
      authHook.login(data.token, data.userId, data.role)
      if(data.role === 'ADMIN') {
        history.push("/products/create");
      } else {
        history.push("/location");
      }
    } catch (e) {
      console.log(e)
    }
  }

  const registrationHandler = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/admin/registration', { ...form }).then(res => res)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <div className="container auth__section">
        <div className="auth__nav">
          <NavLink to="/auth/login" className="auth__nav__item login__nav" exact>Войти</NavLink>
          {authHook.userRole && authHook.userRole === 'ADMIN' ? 
            <NavLink to="/auth/registration" className="auth__nav__item registr__nav" exact>Регистрация</NavLink>
            : null
          }
        </div>
        <div className="auth__form__section">
          <Switch>

            <Route path="/auth/login">
              <form onSubmit={e => e.preventDefault()} className="auth__form row">
                <input type="text" name="name" value={form.name} onChange={formChageHandler} placeholder="name" />
                <input type="password" name="password" value={form.password} onChange={formChageHandler} placeholder="password" />
              </form>
              <button onClick={loginHandler} className="waves-effect waves-dark btn" >Ввойти</button>
            </Route>
          
            {authHook.userRole && authHook.userRole === 'ADMIN' ? 
            <Route path="/auth/registration" exact>
              <form onSubmit={e => e.preventDefault()} className="auth__form row">
                <input type="text" name="name" value={form.name} onChange={formChageHandler} placeholder="name" />
                <input type="password" name="password" value={form.password} onChange={formChageHandler} placeholder="password" />

                <div className="col">
                  <select defaultValue={'default'} className="select__role" name="role" onChange={formChageHandler}>
                    <option value="default" disabled>Выберите роль для нового пользователя </option>
                    <option value="AGENT">Агент</option>
                    <option value="ADMIN">Администратор</option>
                  </select>
                  <label>Materialize Select</label>
                </div>
              </form>
              <button onClick={registrationHandler} className="waves-effect waves-dark btn" >Регистрация</button>
            </Route>
            : null
            }
            <Redirect to="/auth/login" />
          </Switch>
        </div>

      </div>
    </div>
  )
}


export default AuthPage;
