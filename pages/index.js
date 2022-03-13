
import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import Link from 'next/link'
import {auth} from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'


export default function Home() {

  const [user,setuser] = useState(null)
  const router = useRouter()

  useEffect(()=>{
    return onAuthStateChanged( auth, user => {
      if (user) {
        setuser({
          name: user.displayName,
          photoUrl: user.photoURL,

        })
      }
      else {
        setuser(null)
        router.push('/Login')
      }
    })
  },[])

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src='https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg' />

          <Profile>

            <Name>{user && user.name}</Name>
            <UserPic
             src= {user && user.photoUrl} 
             onClick={()=>signOut(auth)}/>

          </Profile> 
        </Header>

        <ActionButtons>
          <Link href ='/Search'>
          <ActionButton >
            <ActionButtonImg src='https://i.ibb.co/cyvcpfF/uberx.png'/>
            Ride
          </ActionButton>
          </Link>

          <ActionButton >
          <ActionButtonImg src='https://i.ibb.co/n776JLm/bike.png'/>
            Wheels
          </ActionButton>

          <ActionButton >
          <ActionButtonImg src='https://i.ibb.co/5RjchBg/uberschedule.png'/>
            Reserve
          </ActionButton>

        </ActionButtons>

        <Link href ='/Search'>
        <InputButton>
        Where to?
        </InputButton>
        </Link>

      </ActionItems>
    </Wrapper>
  
  )
}


const Wrapper = tw.div`
flex flex-col h-screen

`

const ActionItems = tw.div`
flex-1 p-4

`

const Header = tw.div`
flex justify-between items-center 

`

const UberLogo = tw.img`
h-28

`

const Profile = tw.div`
flex items-center

`

const Name = tw.div`
mr-4 w-25 
`

const UserPic = tw.img`
w-12 h-12 rounded-full border border-blue-500 p-px    hover:scale-110 cursor-pointer 
`

const ActionButtons = tw.div`
flex 
`

const ActionButton = tw.div`
flex flex-col cursor-pointer bg-gray-100 flex-1 m-1 h-32 items-center justify-center rounded-2xl transform hover:scale-105 transistion text-xl border border-white border-4
`

const ActionButtonImg= tw.img`
h-3/5
`

const InputButton = tw.div`
h-20 bg-gray-100 text-2xl p-4 flex items-center mt-8 rounded-lg
`