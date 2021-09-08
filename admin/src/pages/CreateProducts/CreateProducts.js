import React, { useContext, useState } from 'react';
import './CreateProducts.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


const CreateProducts = () => {
  const {authHook} = useContext(AuthContext)
  const [beers, setBeers]  = useState({
    name: '',
    volume: '',
    price: '',
    abv: '',
    view: '',
    color: '',
    image: '',
    description: '',
    structure: '',
  })


  const changeBeerHandler = event => {
    setBeers({...beers, [event.target.name]: event.target.value})
  }

  const fileChangeHandler = (event) => {
    setBeers({...beers, [event.target.name]: event.target.files[0]})
  }

  const SaveBeersHandler = event => {
    event.preventDefault();

    const formData = new FormData();

    Object.keys(beers).forEach(key => {
      formData.append(key, beers[key])
    })
    
    axios.post('http://localhost:5000/products/edit/create', formData,
    { headers: { Authorization: `Bearer ${authHook.token}` }}
    )

  }


  return (
    <div>
      <section className="forms__section">
        <div className="container">

          <div className="addBeer">
            <h2 className="addBeer__title">Добавить пиво в каталог</h2>
            <form className="form" onSubmit={SaveBeersHandler}>
              <div className="form__inner">
                <div className="form__left">
                  <div className="form__item"><p>Наименование: </p>
                    <input type="text" name="name"  onChange={changeBeerHandler} />
                  </div>
                  <div className="form__item"><p>Объем: </p>
                    <input type="number" step="0.1" min="0" name="volume" onChange={changeBeerHandler} />
                  </div>
                  <div className="form__item"><p>Цена: </p>
                    <input type="number" step="0.1" min="0" name="price"  onChange={changeBeerHandler} />
                  </div>
                  <div className="form__item"><p>Крепкость: </p>
                    <input type="number" step="0.1" min="0" name="abv"  onChange={changeBeerHandler} />
                  </div>
                  <div className="form__item"><p>Вид: </p>
                    <input type="text" name="view"  onChange={changeBeerHandler} />
                  </div>
                  <div className="form__item"><p>Цвет: </p>
                    <input type="text" name="color"  onChange={changeBeerHandler} />
                  </div>

                  <div className="form__item"><p>Картинка: </p>
                    <input type="file" name="image" id="image"  onChange={fileChangeHandler}/>
                  </div>
                </div>

                <div className="form__right">
                  <div className="form__item"><p>Описание: </p>
                    <textarea type="text" name="description"  onChange={changeBeerHandler} />
                  </div>
                  <div className="form__item"><p>Состав: </p>
                    <textarea type="text" name="structure"  onChange={changeBeerHandler} />
                  </div>
                </div>
              </div>

              <div className="form__btn">
                <button type="submit" className="waves-effect waves-dark btn" >Добавить</button>
              </div>     
            </form>
          </div>
          <NavLink to="/products/edit" className="btn waves-effect waves-light red lighten-2 edit__btn" >Редактирование товаров</NavLink>      
        

        </div>



      </section>
    </div>
  )
}
export default CreateProducts;