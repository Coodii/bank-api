import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name:'user',
  initialState:{
    user : null
  },
  reducers : {
    login : (state, action) =>
    {
      state.user = action.payload;
    },
    logout : (state) => {
      state.user = null
    },
    editName: (state, action) =>
    {
      state.user.firstName = action.payload.firstName;
      state.user.lastName = action.payload.lastName;
    }
  }
  
}
);

export const {login, logout, editName} = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;

