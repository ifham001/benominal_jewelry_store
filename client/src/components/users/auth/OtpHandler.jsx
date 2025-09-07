import { showNotification } from '@/store/user/slices/Notification';
import { verifyOtpAndLoginUser } from '@/store/user/thunks/userAuthThunk';
import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import OtpVerificationLoading from '@/ui/loading/OtpVerificationLoading';
import Button from '@/ui/button/Button';




function OtpHandler({firstStep,phoneNumber}) {
  const [isLoading, setIsLoading] = useState(false);
  
    const [otp, setOtp] = useState('');
    const dispatch = useDispatch();
      
    const handleEditPhone = () => {
        firstStep(); 
        setOtp(''); 
    };
    const handleVerifyOtp = () => {
        if (otp.length !== 6) {
            return dispatch(showNotification({
                message: 'Please enter a valid 6-digit OTP',
                type: 'error',
            }));
        }
        
        dispatch(verifyOtpAndLoginUser(otp,phoneNumber,setIsLoading))
        

    }
  // Show loading screen when verifying OTP
  if (isLoading) {
    return <OtpVerificationLoading />;
  }

  return (
    <>
         <Button
                onClick={handleEditPhone}
                variant="ghost"
                size="small"
                className="text-sm text-green-700 underline mb-4 hover:no-underline"
              >
                Edit Number
              </Button>

              <input
                type="text"
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full border border-gray-300 rounded-full px-4 py-2 mb-4 text-base outline-none text-center"
              />
              <Button
                onClick={handleVerifyOtp}
                className="w-full"
              >
                Verify OTP
              </Button>
    
    </>
  )
}

export default OtpHandler