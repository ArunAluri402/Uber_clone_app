import React, { useState } from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'

const Search = () => {
    const [pickup, setPickup] = useState("");
    const [dropoff,setDropoff] = useState("");

    console.log(pickup);
    console.log(dropoff);
  return (
    <Wrapper>
        <Link href= '/'>
        <ButtonContainer>
            <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
        </ButtonContainer>
        </Link>

        <InputStuff>
            <FromToIcons>
                    <Circle src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png'/>

                    <Line src ='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png'/>

                    <Square src ='https://img.icons8.com/windows/50/000000/square-full.png'/>

            </FromToIcons>

            <InputBoxes>
                <Input 
                 placeholder = "Enter pikup Location"
                 value={pickup}
                 onChange={(e) => setPickup(e.target.value)}
                 />
                <Input 
                placeholder = "Where To?"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                />
            </InputBoxes>

            <PlusButton src='https://img.icons8.com/ios/50/000000/plus-math.png' />
        </InputStuff>

        <SavePlaces>
            <StarIcon src ='https://img.icons8.com/ios-filled/50/ffffff/star--v1.png' />
            Saved Places
        </SavePlaces>
        <Link href={{
            pathname:'/Confirm',
            query:{
                pickup: pickup,
                dropoff: dropoff
            }
            }}>
        <ConfirmLocations>
            Confirm Location
        </ConfirmLocations>
        </Link>


    </Wrapper>

  )
}

export default Search


const Wrapper = tw.div`
bg-gray-200 h-screen
`

const ButtonContainer= tw.div`
bg-white px-4 
`

const BackButton= tw.img`
h-12 cursor-pointer 
`

const InputStuff= tw.div`
bg-white flex items-center px-4 mb-2
`

const FromToIcons= tw.div`
w-10 flex flex-col items-center mr-2
`

const Circle = tw.img`
h-2.5 
`

const Line = tw.img`
h-10
`

const Square= tw.img`
h-3
`

const InputBoxes= tw.div`
flex flex-col flex-1 
`

const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`
const PlusButton=tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3 cursor-pointer 
`

const SavePlaces=tw.div`
flex items-center  bg-white px-4 py-2 cursor-pointer
`
const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-4
`
const ConfirmLocations=tw.div`
bg-black text-white text-center mt-2 p-2 mx-12 cursor-pointer
`
