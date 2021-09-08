import React from 'react';
import './Modal.css';

const Modal = props => {
  const {name, volume, price, abv, view, color, image, description, structure} = props.data;
  
  return (
    <div className="Modal">
      <div className="modal__inner">
        <img className="img__modal" src={"http://localhost:5000/" + image} alt="beer" />
        <div>
        <h2 className="title__modal">{name}</h2>
        <div>Объем: {volume}</div>
        <div>Объем: {price}</div>
        <div>Крепкость: {abv}</div>
        <div>Вид: {view}</div>
        <div>Цвет: {color}</div>
        <div>Описание: {description}</div>
        <div>Состав: {structure}</div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Modal;