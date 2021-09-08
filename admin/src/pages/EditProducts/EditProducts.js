import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const EditProducts = () => {
  const {authHook} = useContext(AuthContext);

  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    volume: '',
    price: '',
    abv: '',
    view: '',
    color: '',
  })

  const getProducts = async () => {
    try {
      const data = await axios.get('http://localhost:5000/products').then(res => res.data)
      setProducts(data)
    } catch (e) {
      console.log(e)
    }
  }

  const removeProduct = async (id) => {
    try {
      const data = await axios.delete(`http://localhost:5000/products/edit/remove/${id}`,
      { headers: { Authorization: `Bearer ${authHook.token}` }}
      ).then(res => res)
      alert(data.message)
      getProducts()
    } catch (e) {
      console.log(e)
    }
  }

  const changeHandler = (e) => {
    setNewProduct({...newProduct, [e.target.name]: e.target.value})
  }

  const updateProduct = async (id) => {
    try {
      const data = await axios.put(`http://localhost:5000/products/edit/update/${id}`, {...newProduct},
      { headers: { Authorization: `Bearer ${authHook.token}` }}
      ).then(res => res)
      getProducts()
    } catch (e) {
      console.log(e)
    }
  }


  useEffect(() => {
    getProducts()
  }, []);
  return (
    <div className="container section__blog">
      <h2>Редактирование товаров</h2>
      <table style={{marginTop: "50px"}}>
        <thead>
          <tr>
            <th>№</th>
            <th>Название</th>
            <th>Объем</th>
            <th>Цена</th>
            <th>Крепкость</th> 
            <th>Вид</th>
            <th>Цвет</th>

          </tr>
        </thead>

        <tbody>
          {products.map((el, index) => {
            return (
              <tr key={el._id}>
                <td>{index + 1}</td>
                <td><input defaultValue={el.name} name="name" onChange={changeHandler}/></td>
                <td><input defaultValue={el.volume} name="volume" onChange={changeHandler} /></td>
                <td><input defaultValue={el.price} name="price" onChange={changeHandler} /></td>
                <td><input defaultValue={el.abv} name="abv" onChange={changeHandler} /></td>
                <td><input defaultValue={el.view} name="view" onChange={changeHandler} /></td>
                <td><input defaultValue={el.color} name="color" onChange={changeHandler} /></td>
                <td><button className="waves-effect waves-light blue lighten-2 btn-small" onClick={() => updateProduct(el._id)}>Обновить</button></td>
                <td><button className="waves-effect waves-light red lighten-2 btn-small" onClick={() => removeProduct(el._id)}>Удалить</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>

          {console.log(newProduct)}
    </div>
  );
}

export default EditProducts;
