
import {increaseQuantity,removeFromCart, decreaseQuantity, showAllItems } from "../slices/AddToCart-Slice"
import { showNotification } from "../slices/Notification"
const api = process.env.NEXT_PUBLIC_USER_ROUTE_URL

export const addToCartThunk =(userId,productId,quantity,setLoading,tokenId)=>{
    return async (dispatch)=>{
        let userCart
        
        try {
          setLoading(true)
            userCart = await fetch(`${api}/add-to-cart`,{    
                    method:'POST',

                    body:JSON.stringify({userId,productId,quantity}),
                    headers:{
                      Authorization: `Bearer ${tokenId}`,
                      "Content-type": "application/json"
                      ,}})

                    const response = await userCart.json()
                if(!userCart.ok){
                  setLoading(false)
                   return  dispatch(showNotification({ 
                        message:response.message|| "Something went wrong",
                        type:"error"}))}
                    setLoading(false)
                
                  dispatch(showCartItemsThunks(userId,tokenId)) 
                return dispatch(showNotification({message:response.message,type:"success"}))



        } catch (error) {
          setLoading(false)
            return dispatch(showNotification({message:"something went wrong try again!",type:"error"}))
        }
      
    }
}
export const showCartItemsThunks = (userId,tokenId)=>{
  
    return async (dispatch)=>{
        let cartItems;
        
        try {
            cartItems= await fetch(`${api}/cart/${userId}`,{
              headers:{
                Authorization: `Bearer ${tokenId}`
              }
            })
            if(!cartItems.ok){
                return dispatch(showNotification({message:'cannot display item something went wrong',type:'error'}))
            }
            const items = await cartItems.json()
          
            
           return dispatch(showAllItems(items))
           
            
        } catch (error) {
          
            return dispatch(showNotification({message:'cannot display item something went wrong',type:'error'}))
        }
        
    }
} 
export const removeItemThunk = (userId, cartItemId,setLoading,tokenId) => {
    return async (dispatch) => {
      setLoading(true)
      try {
        const response = await fetch(`${api}/cart/${userId}/${cartItemId}`, {
          method: "DELETE",
          headers:{
            Authorization: `Bearer ${tokenId}`,
          }
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          return dispatch(
            showNotification({ message: data.message || "Failed to remove item", type: "error" })
          );
        }
        dispatch(removeFromCart(cartItemId))
        dispatch(showNotification({ message: data.message, type: "success" }));
        setLoading(false)
      } catch (error) {
        dispatch(showNotification({ message: "Something went wrong", type: "error" }));
      }
    };
  };
  export const increaseQuantityThunk = (userId, cartItemId,setLoading,tokenId) => {
    return async (dispatch) => {
      setLoading(true)
      try {
        const response = await fetch(`${api}/cart/increase/${userId}/${cartItemId}`,{
          method:'PUT',
          headers:{
            Authorization: `Bearer ${tokenId}`,
          }
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          setLoading(false)
          return dispatch(
            showNotification({ message: data.message || "Could not increase quantity", type: "error" })
          );
        }
        setLoading(false)
        dispatch(increaseQuantity(cartItemId))
        
        dispatch(showNotification({ message: data.message, type: "success" }));
       
      } catch (error) {
        dispatch(showNotification({ message: "Something went wrong", type: "error" }));
      }
    };
  };
  export const decreaseQuantityThunk = (userId, cartItemId,setLoading,tokenId) => {
    return async (dispatch) => {
     setLoading(true)
      try {
        const response = await fetch(`${api}/cart/decrease/${userId}/${cartItemId}`, {
          method:'PUT',
        headers:{
          Authorization: `Bearer ${tokenId}`,
        }
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          setLoading(false)
          return dispatch(
            showNotification({ message: data.message || "Could not decrease quantity", type: "error" })
          );
        }
        setLoading(false)
        dispatch(decreaseQuantity(cartItemId))
        dispatch(showNotification({ message: data.message, type: "success" }));
       
      } catch (error) {
        dispatch(showNotification({ message: "Something went wrong", type: "error" }));
      }
    };
  };
      



