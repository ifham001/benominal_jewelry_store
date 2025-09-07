import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showNotification } from '@/store/user/slices/Notification';
import { sendOtpOnPhone } from '@/store/user/thunks/userAuthThunk';
import SendOtpLoading from '@/ui/loading/SendOtpLoading';
import Button from '@/ui/button/Button';


function SendOtp({secondstep}) {
    const dispatch = useDispatch();
    const [phoneNumber,setPhoneNumber]=useState()
    const [isLoading, setIsLoading] = useState(false);

      const handleOtpRequest = async() => {
        if (phoneNumber.length !== 10) {
           return dispatch(showNotification({
                message: 'Please enter a valid 10-digit phone number',
                type: 'error',
            }))}
         await dispatch(sendOtpOnPhone(phoneNumber,setIsLoading))

           secondstep(`+91${phoneNumber}`)
        }

  // Show loading screen when sending OTP
  if (isLoading) {
    return <SendOtpLoading />;
  }

  return (
    <>
         <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 mb-4 bg-white shadow-sm">
                <select
                  className="bg-white text-base outline-none"
                >
                  <option value="+91">+91</option>
                 
                </select>
                <input
                  type="tel"
                  placeholder="Phone number"
                  typeof="number"
                  pattern="[0-9]*"
                  maxLength={10}
                  // value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1 ml-3 outline-none text-base bg-white"
                />
              </div>

              <Button
                onClick={handleOtpRequest}
                className="w-full mb-4"
              >
                Get OTP on phone
              </Button>
    
    
    </>
  )
}

export default SendOtp