
import { showNotification } from "@/store/user/slices/Notification"
import { login } from "../slices/AdminAuth"




const api = process.env.NEXT_PUBLIC_ADMIN_ROUTE_URL

export const adminAuthThunk =(userData,router)=>{

 
 return  async (dispatch)=>{
        
        // Check if API URL is configured
        if (!api) {
          return dispatch(showNotification({
            type: 'error',
            message: 'Admin API URL not configured. Please check environment variables.',
          }));
        }

       
 
        try {
          const response =  await fetch(`${api}/login`,{
            method:'POST',
            body:JSON.stringify(userData),
            headers:{
                "Content-type":"application/json",
                
            }
          })
          
          // Check if response is ok before trying to parse JSON
          if (!response.ok) {
            const errorText = await response.text();
            console.error('Response error:', response.status, errorText);
            return dispatch(showNotification({
              type: 'error',
              message: `Login failed: ${response.status} - ${response.statusText}`,
            }));
          }
          
                    const data = await response.json()
          
          if(data.idToken){
            dispatch(login({idToken:data.idToken}))
            dispatch(showNotification({
              type: 'success',
              message: 'Login successful!',
            }))
            router.push('/admin/dashboard')
          } else {
            // Response was ok but no token - invalid credentials
            return dispatch(showNotification({
              type: 'error',
              message: data.message || 'Invalid credentials. Please try again.',
            }))
          }
          

          
        } catch (error) { 
         
          
            return dispatch(showNotification({
              message: `Login failed: ${error.message || 'Something went wrong, try again'}`,
              type:'error'
            }))
        }
    }
}