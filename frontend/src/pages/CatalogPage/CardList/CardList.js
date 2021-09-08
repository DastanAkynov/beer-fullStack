import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios'
import Header from '../../../components/Header/Header';
import BackDrop from '../../../components/UI/BackDrop/BackDrop';
import Modal from '../../../components/UI/Modal/Modal';
import tickIcon from '../../../assets/icons/tick.png'
import './CardList.css';
import { AuthContext } from '../../../context/AuthContext';




const CardList = () => {
  const { amountHook, basketCounterHook } = useContext(AuthContext);

  const [data, setData] = useState([]);
  const [modalData, setModalData] = useState({});     //передает данные в модалку
  const [show, setShow] = useState(false);            //показывает или убирает модалку и BackDrop

  const makeNewBeer = (_id, beer) => {
    const storageData = { ...beer, counter: 1, sum: beer.price }
    localStorage.setItem([_id], JSON.stringify(storageData))
    fetchBeers()
    amountHook.getAmount()
    basketCounterHook.refreshBasketCounter()
  }

  const showModal = (data) => {
    setShow(true)
    setModalData({ data })
  }

  const fetchBeers = async() => {
    try {
      await axios.get('http://localhost:5000/products')
        .then(response =>
          setData([response.data])
        )
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchBeers()
  }, [])       //tick - рэндерится каждый раз когда срабатывает onClick (В Корзину)


  return (
    <div>
      <Header />
      <div className="container">
        {show ? <BackDrop closeBackDrop={() => setShow(false)} /> : null}
        {show ? <Modal {...modalData} /> : null}
        <div className="card__wrapper">
          {data.length === 0 ? <h1>Loading...</h1> :
            data[0].map(beer => (
              <div className="card__box" key={beer._id}>
                {localStorage.getItem(beer._id) ? <img src={tickIcon} alt="tick" className="tick" /> : null}    {/* tick отображается если в localStorage есть id*/}
                <div className="cardImg__wratter" onClick={() => showModal({ ...beer })}>
                  <img src={"http://localhost:5000/" + beer.image} className="card__img" alt="beer" />
                </div>
                <h2 className="card__title">{beer.name}</h2>
                <div className="card__volume">{beer.volume} л.</div>
                <div className="card__price">{beer.price} сом</div>
                <button className="card__buttom" onClick={() => makeNewBeer(beer._id, { ...beer })}>В Корзину</button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CardList;



