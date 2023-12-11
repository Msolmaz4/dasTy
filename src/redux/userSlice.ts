import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'



export interface userState {
   data:User | null,
   loading:boolean,
   error:string
}
 
const initialState: userState = {
data:null,
loading:false,
error:''
}

export const postUser = createAsyncThunk('getUser',async(values)=>{
console.log(values,'ilkyer')
const { data } = await axios.post(
  "https://17106.fullstack.clarusway.com/users/",
  values
);
console.log("register",data);
return data
 
})


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   
  },
  extraReducers:(builder)=>{
    builder.addCase(postUser.pending,(state)=>{
      state.loading = true,
      state.error=""
    }),
    builder.addCase(postUser.fulfilled,(state,{payload})=>{
     console.log(payload,'builder')
      state.data = payload,
      state.loading = false
     

    })
  }
})

// Action creators are generated for each case reducer function
export const {  } = userSlice.actions

export default userSlice.reducer


interface User {
  email: string;
  password: string;
  lastname: string;
  firstname: string;
  username: string;
}
