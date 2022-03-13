import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'

const Confirm = () => {
    const router = useRouter()
    const { pickup, dropoff } = router.query

    const [pickupCoordinates,setPickupCoordinates] = useState([0,0])
    const [dropoffCoordinates,setDropoffCoordinates] = useState([0,0])


    const getPikupCoordinates = (pickup) =>{
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
        new URLSearchParams({
            access_token: "pk.eyJ1IjoiYXJ1bjQwMiIsImEiOiJja3ptbmpzeHozcGd3Mm9rdW04Mnd4bnVxIn0.eL7EOvBZ7IxsNFMs9iivMA",
            limit: 1
        }))
        .then(response => response.json())
        .then(data =>{
            setPickupCoordinates(data.features[0].center)
        })    
    }
    const getDropoffCoordinates= (dropoff) =>{
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+
        new URLSearchParams({
            access_token: "pk.eyJ1IjoiYXJ1bjQwMiIsImEiOiJja3ptbmpzeHozcGd3Mm9rdW04Mnd4bnVxIn0.eL7EOvBZ7IxsNFMs9iivMA",
            limit: 1
        }))
        .then(response => response.json())
        .then(data =>{
            setDropoffCoordinates(data.features[0].center)
        })    

    }

    useEffect(() => {
        getPikupCoordinates(pickup);
        getDropoffCoordinates(dropoff);

    }, [pickup, dropoff])


  return (
    <Wrapper>
        <ButtonContainer>
            <Link href='./Search'>
            <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
            </Link>
        </ButtonContainer>
        <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
        />
        <BottomContainer>
            <RideSelector
             pickupCoordinates={pickupCoordinates}
             dropoffCoordinates={dropoffCoordinates}
             />
                <ConfirmButtonContainer>
                    <ConfirmButton>
                    Confirm UberX
                    </ConfirmButton>
                </ConfirmButtonContainer>


        </BottomContainer>
    </Wrapper>
  )
}

export default Confirm

const Wrapper = tw.div`
flex h-screen flex-col
`
const ButtonContainer=tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer w-10 h-10
`
const BackButton=tw.img`
h-full object-contain 
`

const BottomContainer= tw.div`
flex-1 flex flex-col h-1/2
`
const ConfirmButtonContainer = tw.div`
border-t-2
`
const ConfirmButton= tw.div`
bg-black text-white text-center my-2 mx-6 py-3 text-xl 
`

