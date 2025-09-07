import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { GoogleLogin } from '@react-oauth/google'
import { showNotification } from '@/store/user/slices/Notification'
import { userLogin } from '@/store/user/slices/UserAuth-Slice'
import { GoogleOAuthProvider } from "@react-oauth/google";


const url = process.env.NEXT_PUBLIC_USER_ROUTE_URL
const googleKey = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID 


function LoginByGoogle({ onClose }) {
  const dispatch = useDispatch()
  

  const handleGoogleSuccess = async (credentialResponse) => {
    try {

      const res = await fetch(`${url}/google-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ credential: credentialResponse.credential }),
      })

      const data = await res.json()
     

      if (!res.ok) {
        return dispatch(
          showNotification({
            message: data.message || 'Login failed. Please try again.',
            type: 'error',
          })
        )
        
      }
      if(data.idToken){
        dispatch(userLogin(data))
        dispatch(
          showNotification({
            message: data.message || 'Login successful!',
            type: 'success',
          })
        )
      }
       

     

      // Assuming you have a login action to handle the user data

      if (onClose) onClose()
    } catch (err) {
      dispatch(
        showNotification({
          message: err.message || 'Unexpected error during login',
          type: 'error',
        })
      )
    } finally {
      
    }
  }

  return (
     <GoogleOAuthProvider clientId={googleKey}>


    <GoogleLogin
      onSuccess={handleGoogleSuccess}
      onError={() =>
        dispatch(
          showNotification({
            message: 'Google login failed',
            type: 'error',
          })
        )
      }
      useOneTap={false}
      shape="pill"
      size="medium"
      text="continue_with"
    />
         </GoogleOAuthProvider>
  )
}

export default LoginByGoogle




// import { useGoogleLogin } from '@react-oauth/google'

// const login = useGoogleLogin({
//   onSuccess: tokenResponse => console.log(tokenResponse),
//   onError: () => console.log('Login Failed'),
// })

// return (
//   <button onClick={() => login()} className="bg-black text-white px-4 py-2 rounded-md">
//     Login with Google
//   </button>
// )
