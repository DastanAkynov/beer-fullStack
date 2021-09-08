import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';
import ChangeMarker from './ChangeMarker';

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
