import {configureStore} from '@reduxjs/toolkit'
import AdminAuthSlice from './admin/slices/AdminAuth'
import confirmNotification from './user/slices/ConfirmNotification'
import userAuthSlice from './user/slices/UserAuth-Slice'
import addToCartSlice from './user/slices/AddToCart-Slice'
import notificationSlice from './user/slices/Notification'





export const store = configureStore({
    reducer:{
        adminAuth:AdminAuthSlice.reducer,
        notification: notificationSlice.reducer,
        confirmNotification:confirmNotification.reducer,
        userAuth:userAuthSlice.reducer,
        userCart:addToCartSlice.reducer
    }
})