import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

const ChangeMarker = (props) => {
  const { name, address, lat, lng} = props.salerData

  const [markerInfo, setMarkerInfo] = useState(null);

  return (
    <div>
      <Marker position={{ lat: +lat, lng: +lng }}          //Маркер местоположения
        onClick={() => setMarkerInfo({...markerInfo, name, address})}
      />
      {markerInfo &&
        <InfoWindow position={{ lat: +lat, lng: +lng }}        //Описание местоположения
          onCloseClick={() => setMarkerInfo(null)}
        >
          <div>
            <h3>{markerInfo.name}</h3>
            <h4>{markerInfo.address}</h4>
          </div>
        </InfoWindow>
      }
    </div>
    )
}

const Map = (props) => {

  return (
    <GoogleMap
      defaultZoom={12.8}
      defaultCenter={{ lat: 42.86861, lng: 74.60155 }}
    >
      
      {props.salers.length === 0 ? null :
      props.salers.map(el => (
        <ChangeMarker key={el._id} salerData={el} />
      ))
      }
    </GoogleMap>

  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;