import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../data/carList";

const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
  const [rideDuration, setRideDuration] = useState(0);
  useEffect(() => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiYXJ1bjQwMiIsImEiOiJja3ptbmpzeHozcGd3Mm9rdW04Mnd4bnVxIn0.eL7EOvBZ7IxsNFMs9iivMA`
    )
      .then((res) => res.json())
      .then((data) => {
        setRideDuration(data.routes[0].duration / 100);
      });
  }, [pickupCoordinates, dropoffCoordinates]);

  return (
    <Wrapper>
      <Title>Choose a Ride or swipe up</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImg src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>5 mins away</Time>
            </CarDetails>
            <CarPrice>
              {"Rs " + (rideDuration * car.multiplier).toFixed(2) + " /-"}
            </CarPrice>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const Wrapper = tw.div`
flex-1 flex flex-col overflow-y-scroll
`;
const Title = tw.div`
text-gray-500 text-center text-xs p-1 border-b
`;
const CarList = tw.div`
overflow-y-scroll
`;
const Car = tw.div`
flex p-4 items-center
`;

const CarImg = tw.img`
h-14 mr-4
`;

const CarDetails = tw.div`
flex-1
`;

const Service = tw.div`
font-medium 
`;

const Time = tw.div`
text-xs text-blue-500
`;

const CarPrice = tw.div`
text-sm 
`;
