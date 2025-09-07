import { userLogin} from "../slices/UserAuth-Slice";
import { showNotification } from "../slices/Notification";

const api = process.env.NEXT_PUBLIC_USER_ROUTE_URL
export const sendOtpOnPhone =(phoneNumber,setLoading)=>{
   return async (dispatch)=>{
        // Set sending OTP loading state to true
    
        
        try {
            setLoading(true)
            const otp =  await fetch(`${api}/send-otp`,{
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({phoneNumber:`+91${phoneNumber}`})}
            );

                if (!otp.ok) {
                    const errorData = await otp.json();
                    setLoading(false)
                   
                    return dispatch(showNotification({
                    message: errorData.message || 'Failed to send OTP. Please try again.',
                    type: 'error',
                    }));}
                    setLoading(false)
                    const data = await otp.json()
                    dispatch(showNotification({
                        message:data.message,
                        type:'success'
                    }))
                    setLoading(false)
        } catch (error) {
            setLoading(false)
            return dispatch(showNotification({
                message: error.message || 'Failed to send OTP. Please try again.',
                type: 'error',
                }));
        }
        finally{
            setLoading(false)
        }
        
        }

    }

export const verifyOtpAndLoginUser = (otp,phoneNumber,setLoading)=>{
 return async (dispatch)=>{
        // Set loading state to true
        
        
        try {
            setLoading(true)
            const response = await fetch(`${api}/verify-otp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phoneNumber, otp }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setLoading(false)
                return dispatch(showNotification({
                    message: errorData.message || 'Failed to verify OTP. Please try again.',
                    type: 'error',
                }));
            }

            const data = await response.json();
            if(data.idToken)
                setLoading(false)
                dispatch(userLogin(data))
            dispatch(showNotification({
                message: data.message || 'OTP verified successfully!',
                type: 'success',
            }));
            setLoading(false)
        } catch (error) {
            console.error('Error verifying OTP:', error);
            setLoading(false)
            dispatch(showNotification({
                message: 'An error occurred while verifying OTP. Please try again.',
                type: 'error',
            }));
        }
    }
    
 }



