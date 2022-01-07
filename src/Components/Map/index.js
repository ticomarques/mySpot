import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

export const Map = () => {

  const [ selected, setSelected ] = useState({});
  
  const onSelect = item => {
    setSelected(item);
  }
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: -22.999015, lng: -43.254617
  }

  const locations = [
    {
      name: "São Conrado - Canto Esquerdo",
      location: { 
        lat: -22.999015,
        lng: -43.254617 
      },
    },
    {
      name: "Posto 13",
      location: { 
        lat: -22.999850,
        lng: -43.259080
      },
    },
    {
      name: "São Conrado - Canto Direito",
      location: { 
        lat: -23.002410,
        lng: -43.273845
      },
    },
    {
      name: "Joatinga",
      location: { 
        lat: -23.014784,
        lng: -43.289650
      },
    },
    {
      name: "Praia do Vidigal",
      location: { 
        lat: -22.991438,
        lng: -43.231473
      },
    },
    {
      name: "Lage do Sheraton",
      location: { 
        lat: -22.994702,
        lng: -43.231344
      },
    }
  ];
  
  return (
     <LoadScript
       googleMapsApiKey={process.env.REACT_APP_GOOGLE_APIKEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
          {
            locations.map(item => {
              return (
              <Marker key={item.name} 
                position={item.location}
                onClick={() => onSelect(item)}
              />
              )
            })
         }
        {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
            )
         }
        </GoogleMap>
     </LoadScript>
  );
};


