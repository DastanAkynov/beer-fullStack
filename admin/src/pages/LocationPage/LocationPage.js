import React, {useState, useEffect} from 'react';
import WrappedMap from './Map';
import axios from 'axios';
import './LocationPage.css';

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

  useEffect(() => {
    getSalers()
  }, []);

  return (
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
  );
}

export default LocationPage;
