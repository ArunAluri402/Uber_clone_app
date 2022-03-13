import React from 'react'
import { useEffect } from 'react';
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ1bjQwMiIsImEiOiJja3ptbmpzeHozcGd3Mm9rdW04Mnd4bnVxIn0.eL7EOvBZ7IxsNFMs9iivMA';



const Map = (props) => {

  console.log(props)


    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [78.9629, 20.5937],
          zoom: 3,
        })
        if(props.pickupCoordinates){              addToMap(map,props.pickupCoordinates )
        }
        if(props.dropoffCoordinates){              addToMap(map,props.dropoffCoordinates )
        }

        if(props.pickupCoordinates&&props.dropoffCoordinates){
          map.fitBounds([
            props.pickupCoordinates, props.dropoffCoordinates
          ], {
            padding: 40
          })
        }

      },[props.pickupCoordinates,props.dropoffCoordinates]);

        const addToMap=(map, coordinates) =>{
          const marker1 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
          }



  return (
    <Wrapper id= 'map' />
  )
}

export default Map

const Wrapper= tw.div`
flex-1 h-1/2
`