const { createSlice } = require("@reduxjs/toolkit");

const confirmNotification = createSlice({
    name:'confirm-notification',
    initialState:{
        title:'',
        message:'',
        response:null,
       
    },
    reducers:{ 
        showconfirmationNotification:(state,action)=>{
            state.title = action.payload.title
            state.message = action.payload.message
            
        }
        ,onConfirm:(state,action)=>{
            state.title='',
            state.message=''
            state.response = true
            
        },
        resetResponse:(state,action)=>{
            state.response = null,
             state.title='',
            state.message=''

        }
        
    }
    
    })
    export default confirmNotification
    export const  {resetResponse,showconfirmationNotification,onConfirm} = confirmNotification.actions