'use client'
import React, { useEffect, useState } from 'react'
import PopUpModal from '@/ui/PopUpModal'
import LoginByGoogle from './LoginByGoogle'
import Image from 'next/image'
import { useSelector,useDispatch } from 'react-redux'
import { isAuthenticated } from '@/store/user/slices/UserAuth-Slice'
import OtpHandler from './OtpHandler'
import SendOtp from './SendOtp'


function AuthForms() {
  const [phoneNumber, setPhoneNumber] = useState()
  const [step, setStep] = useState(1) // 1 = phone, 2 = otp
const {message,tokenId} = useSelector(state=>state.userAuth)
  const editPhoneNumber = () => setStep(1)
  const [loginPopup,setLoginPopup] = useState(false)
  const dispatch = useDispatch()
  const secondStep = (phoneNumber) => {
    
    setPhoneNumber(phoneNumber)
    setStep(2)
  }

  useEffect(()=>{
    if(message){
      return setLoginPopup(true)
    }
    if(tokenId){
      return setLoginPopup(false)
    }
  },[message,tokenId])
  
  const onClose =()=>{
    setLoginPopup(false)
    dispatch(isAuthenticated({message:""}))
  }
 

  return (
    <>
      <PopUpModal onClose={onClose} isOpen={loginPopup}>
      <div className="flex justify-center mb-4">
  {/* <Image src={img} alt="Benominal Logo" className="w-40 rounded-2xl " /> */}
</div>
        <h1 className="text-lg sm:text-xl font-semibold text-center mb-6 text-green-900">Login</h1>
        {/* <p className='flex justify-center m-2 text-sm text-green-900' >Login First before adding item to cart</p> */}

        <div className="relative w-full h-[210px] overflow-hidden">
          <div
            className="absolute top-0 left-0 w-[200%] flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${step === 1 ? '0%' : '-50%'})` }}
          >
            {/* Step 1: Phone Form */}
            <div className="w-1/2 pr-2">
              <SendOtp secondstep={secondStep} />
              <div className="text-xs text-gray-500 mb-4 text-center">or</div>
              <div className="flex justify-center">
                <LoginByGoogle />
              </div>
            </div>

            {/* Step 2: OTP Form */}
            <div className="w-1/2 pl-2">
              <div className="mb-2 text-sm text-gray-800">
                OTP sent to <strong>{phoneNumber}</strong>
              </div>

              <OtpHandler phoneNumber={phoneNumber} firstStep={editPhoneNumber} />

              {/* Back Button */}
              <div className="mt-4 text-center">
                <button
                  onClick={editPhoneNumber}
                  className="text-sm text-green-900 hover:underline"
                >
                  ← Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </PopUpModal>
    </>
  )
}

export default AuthForms
