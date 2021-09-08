import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header';
import InfoSection from '../../components/InfoSection/InfoSection';
import locationIcon from '../../assets/icons/locationIcon.png';
import './LocationPage.css'
import WrappedMap from './Map';
import axios from 'axios';



const key = 'AIzaSyBgk83LQC5VQCOOJMXK6zmv2IlEZp4Ax1w';

const LocationPage = () => {
  const [salers, setSalers] = useState([])

  const getSalers = async () => {
    try {
      const data = await axios.get('http://localhost:5000/map').then(res => res.data)
      setSalers(data)
    } catch (e) {
      console.log(e)
    }
  }

  let isReady = false

  useEffect(() => {
    getSalers()
    isReady = true
  }, []);

  return (
    <div>
      <Header />
      <section className="container mapSection">
        <h1>Точки продаж</h1>
        <h2>Google map</h2>

        <div className="googleMap">
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`}
            loadingElement={<div style={{ height: '100vh' }}></div>}
            containerElement={<div style={{ height: '100vh' }}></div>}
            mapElement={<div style={{ height: '100vh' }}></div>}
            salers={salers}
          />
        </div>
      </section>


      <section className="location">
        <div className="container">
          <h2 className="loc_title">Адреса</h2>
          <div className="loc__list">
            {salers.map(el => (
              <div key={el._id} className="loc__item">
                <img src={locationIcon} alt="locationIcom" />
                <p><strong style={{fontSize: '18px'}}>{el.name}</strong></p>
                <p>{el.address}</p>
                <p>+{el.phone}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      <InfoSection />
    </div>
  )
}

export default LocationPage;

