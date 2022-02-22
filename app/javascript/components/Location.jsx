import React from 'react'
import { GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '50vh'
};

const center = {
  lat: 41.0082,
  lng: 28.9784
};

function Location() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyD8_QKqZNpfYJQqelOONNrLoK7Jb4em2mM"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker />
      </GoogleMap>
  ) : <></>
}

export default React.memo(Location)