import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//Method used to get the token
export const getToken = createAsyncThunk ('user/getToken', async (user) => {
  const response = await axios.post('http://localhost:3001/api/v1/user/login', {
    email: user.email,
    password: user.password
    })
  return response.data.body;
})

//Method used to login
export const login = createAsyncThunk ('user/login', async (token) => {
  const response = await axios.post('http://localhost:3001/api/v1/user/profile',null, 
  {
      headers: {Authorization: `Bearer` + token} 
  })
  return response.data.body;
})

//Method used to change user information
export const editProfil = createAsyncThunk ('user/editProfil', async ({firstName, lastName, token}) => {
  const response = await axios.put('http://localhost:3001/api/v1/user/profile',{
    firstName: firstName,
    lastName: lastName
    }, 
    {
    headers: {Authorization: `Bearer` + token} 
    })
    return response.data.body;
})

//Slice to manage the state of the user
export const userSlice = createSlice({
  name:'user',
  initialState:{
    token : null,
    tokenReceived : false,
    firstName : null,
    lastName : null,
    connected : false,
    loading : false,
    error : false
  },
  reducers : {
    logout : (state) => {
      state.token = null
      state.firstName = null
      state.lastName = null
      state.connected = false
      state.loading = false
      state.error = false
      state.tokenReceived = false;
    }
  },
  //For the create async thunk methods
  extraReducers: (builder) => {
    //Get token method
    builder.addCase(getToken.fulfilled, (state, action) => {
      state.token = action.payload.token; 
      state.error = false;
      state.tokenReceived = true;
    })
    builder.addCase(getToken.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(getToken.rejected, (state) => {
      state.login = false;
      state.error = true;
    })

    //Login method
    builder.addCase(login.fulfilled, (state, action) =>{
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.connected = true;
      state.login = false;
    })
    builder.addCase(login.rejected, (state) => {
      state.login = false;
    })

    //Edit name method
    builder.addCase(editProfil.fulfilled, (state, action) => {
    state.firstName = action.payload.firstName
    state.lastName = action.payload.lastName
    })
  }
});

export const { logout, editName} = userSlice.actions;
export const selectUser = (state) => state;
export default userSlice.reducer;

