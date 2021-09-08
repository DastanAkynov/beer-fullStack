import React, {useState, useContext} from 'react';
import {Marker, InfoWindow } from 'react-google-maps';
import { AuthContext } from '../../context/AuthContext';


const ChangeMarker = (props) => {
  const { _id ,name, address, lat, lng} = props.salerData

  const {modalHook, authHook} = useContext(AuthContext);
  const [markerInfo, setMarkerInfo] = useState(null);


  return (
    <div>
      <Marker position={{ lat: lat, lng: lng }}          //Маркер местоположения
        onClick={() => setMarkerInfo({name, address})}
      />
      {markerInfo &&
        <InfoWindow position={{ lat: lat, lng: lng }}        //Описание местоположения
          onCloseClick={() => setMarkerInfo(null)}
        >
          <div className="marker__info">
            <h6>{name}</h6>
            <p>{address}</p>
            <button onClick={() =>modalHook.showModal(_id)} className="btn waves-effect waves-light">Отзывы</button>
            <button onClick={() =>modalHook.showCreateReview(_id, authHook.userId)} className="btn waves-effect waves-light">Оставить отзыв</button>
          </div>
          
        </InfoWindow>
      }
    </div>
    )
}

export default ChangeMarker;