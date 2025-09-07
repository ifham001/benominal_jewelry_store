const { createSlice } = require("@reduxjs/toolkit");

let userData = {};
if (typeof window !== 'undefined') {
  try {
    userData = JSON.parse(localStorage.getItem('userData')) || {};
  } catch (e) {
    userData = {};
  }
}

const userAuthSlice = createSlice({
  name: 'user-auth',
  initialState: {
  
    tokenId: userData.idToken || null,
    userId: userData.userId || null,
    username: userData.username || null,
    message:'',
 
  },
  reducers: {
    userLogin:(state, action)=> {
      const { idToken, userId, username } = action.payload;
      
      state.tokenId = idToken;
      state.userId = userId;
      state.username = username;

      if (typeof window !== 'undefined') {
        localStorage.setItem('userData', JSON.stringify({
          idToken: idToken,
          userId,
          username
        }));
      }
      state.message=''
    },
    userSignOut:(state)=> {
      state.tokenId = null;
      state.userId = null;
      state.username = null;

      if (typeof window !== 'undefined') {
        localStorage.removeItem('userData');
      }
    },
    isAuthenticated:(state,action)=>{
        state.message=action.payload.message
    },
   
  }
});

export const { userLogin, userSignOut,isAuthenticated } = userAuthSlice.actions;
export default userAuthSlice;
