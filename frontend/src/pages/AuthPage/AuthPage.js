import React, {useState, useContext} from 'react'
import axios from 'axios';

import Header from '../../components/Header/Header'
import InfoSection from '../../components/InfoSection/InfoSection'
import {NavLink, Route, Switch, Redirect} from 'react-router-dom';
import './AuthPage.css';
import { AuthContext } from '../../context/AuthContext';



const AuthPage = () => {

  const {login, props} = useContext(AuthContext);

  const [form, setForm] = useState({
    name: '',
    address: '',
    password: ''
  });
  
  
  const formChageHandler = e => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const loginHandler = async() => {
    try {
      const data = await axios.post('http://localhost:5000/api/auth/login', {name: form.name, password: form.password}).then(res => res.data)
      login(data.token, data.userId)
      props.history.push('/')
    } catch(e) {
      console.log(e)
    }
  }

  const registrationHandler = async() => {
    try {
      await axios.post('http://localhost:5000/api/auth/registration', {...form})
    } catch(e) {
      console.log(e)
    }
  }
 
  return (
    <div>
      <Header />
    <div className="container auth__section">
      <div className="auth__nav">
        <NavLink to="/auth/login" className="auth__nav__item login__nav" exact>Войти</NavLink>
        <NavLink to="/auth/registration" className="auth__nav__item registr__nav" exact>Регистрация</NavLink>
      </div>
      <div className="auth__form__section">
        <Switch>
          <Route path="/auth/login">
            <form onSubmit={e => e.preventDefault() } className="auth__form">
              <input type="text" name="name" value={form.name} onChange={formChageHandler} placeholder="name"/>
              <input type="password" name="password" value={form.password}  onChange={formChageHandler}placeholder="password"/>
            </form>
            <button onClick={loginHandler} className="auth__btn">Ввойти</button>
          </Route>
          <Route path="/auth/registration" exact>
            <form onSubmit={e => e.preventDefault()} className="auth__form">
              <input type="text" name="name" value={form.name} onChange={formChageHandler} placeholder="name"/>
              <input type="text" name="address" value={form.address} onChange={formChageHandler} placeholder="address"/>
              <input type="password" name="password" value={form.password} onChange={formChageHandler} placeholder="password" />
            </form>
            <button onClick={registrationHandler} className="auth__btn">Регистрация</button>
          </Route>
          <Redirect to="/auth/login"/>
        </Switch>
      </div>

    </div>

      <InfoSection />
    </div>
  )
}

export default AuthPage;