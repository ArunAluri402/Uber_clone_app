import React, {useEffect} from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth, provider } from '../firebase'

const Login = () => {

    const router = useRouter()
    useEffect(()=>{
        onAuthStateChanged (auth, user => {
            if (user) {
                router.push('/')
            }
        })
    }, [])
  return (
    <Wrapper>
        <UberLogo src='https://i.ibb.co/n6LWQM4/Post.png' />
        <Content>
            Log In to access your account
        </Content>
        <ClipArt src='https://i.ibb.co/CsV9RYZ/login-image.png'/>
        <SignInButton onClick={()=>signInWithPopup(auth,provider)}>
            Sign In with Google
        </SignInButton>
    </Wrapper>
  )
}

export default Login

const Wrapper = tw.div`
flex flex-col h-screen w-screen p-4
`
const SignInButton=tw.button`
bg-black text-white text-center py-4 mt-8  self-center w-full 
`
const UberLogo = tw.img`
h-10 w-auto object-contain self-start
`
const Content = tw.div`
text-gray-500 text-5xl pt-4
`
const ClipArt= tw.img`
object-contain w-full 
`