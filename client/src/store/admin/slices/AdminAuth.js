
const { createSlice } = require("@reduxjs/toolkit");

let token = null;
if (typeof window !== 'undefined') {
  token = localStorage.getItem('adminToken');
}
  // Set an empty token for initial state

const AdminAuthSlice = createSlice({
  name: 'auth',
  initialState: {
    admin:false,
    token: token,
    
  },
  reducers: {
    login(state, action) {
    
      state.token = action.payload.idToken;
      state.admin = true;
      localStorage.setItem('adminToken', action.payload.idToken);
      state.token? state.admin = true : state.admin = false},

    signOut(state) {
      state.token = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('adminToken');
      }
    }
  }
});

export const { login, signOut } = AdminAuthSlice.actions;
export default AdminAuthSlice;
