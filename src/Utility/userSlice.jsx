import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initState = {
    token : null,
    firstName : null,
    lastName : null,
    connected : false,
    loading : false,
    error : false,
    errorMessage : null
}

export const getEmail = () => {return localStorage.getItem("email")};

//Method used to get the token
export const getToken = createAsyncThunk ('user/getToken', async (user, thunkAPI) => {
  try{
    if(user.rememberMe){
        localStorage.setItem("email", user.email);
    }
    else{
        localStorage.removeItem("email");
    }
    const response = await axios.post('http://localhost:3001/api/v1/user/login', {
    email: user.email,
    password: user.password
    })
  return response.data.body;
  }
  catch (err){
    if(err?.response){
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
    else{
      return thunkAPI.rejectWithValue('Server error');
    }
  }
})

//Method used to login
export const login = createAsyncThunk ('user/login', async (token, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:3001/api/v1/user/profile',null, 
    {
        headers: {Authorization: `Bearer` + token} 
    })
    return response.data.body;
  }
  catch (err){
    if(err?.response){
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
    else{
      return thunkAPI.rejectWithValue('Server error');
    }
  }
})

//Method used to change user information
export const editProfil = createAsyncThunk ('user/editProfil', async ({firstName, lastName, token}, thunkAPI) => {
  try {
    const response = await axios.put('http://localhost:3001/api/v1/user/profile',{
    firstName: firstName,
    lastName: lastName
    }, 
    {
    headers: {Authorization: `Bearer` + token} 
    })
    return response.data.body;
  }
  catch (err){
    if(err?.response){
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
    else{
      return thunkAPI.rejectWithValue('Server error');
    }
  }
})

//Slice to manage the state of the user
export const userSlice = createSlice({
  name:'user',
  initialState: initState,
  reducers : {
    logout : (state) => {
      state.token = null
      state.firstName = null
      state.lastName = null
      state.connected = false
      state.loading = false
      state.error = false
      state.errorMessage = null;
      state.tokenReceived = false;
    }
  },
  //For the create async thunk methods
  extraReducers: (builder) => {
    //Get token method
    builder.addCase(getToken.fulfilled, (state, action) => {
      state.token = action.payload.token; 
      state.error = false;
      state.errorMessage = null;
    })
    builder.addCase(getToken.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.errorMessage = null;
    })
    builder.addCase(getToken.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = action.payload;
    })

    //Login method
    builder.addCase(login.fulfilled, (state, action) =>{
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.connected = true;
      state.errorMessage = null;
      state.loading = false
    })
    builder.addCase(login.rejected, (state, action) => {
      state.error = true;
      state.errorMessage = action.payload;
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

