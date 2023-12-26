
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";


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

export const postUser = createAsyncThunk('/getUser',async(values)=>{

const { data } = await axios.post(
  "https://17106.fullstack.clarusway.com/users/",
  values
);
console.log("register",data);
return await data
 
})
export const logUser = createAsyncThunk('/pos',async(values)=>{
 try {
  const { data} = await axios.post("https://17106.fullstack.clarusway.com/auth/login/",
  values)
  console.log(data,'logus')
return data
 } catch (error) {
  console.log(error?.response?.data?.message)
  toast.error( error?.response?.data?.message, {
    position: toast.POSITION.TOP_LEFT
  });
 
 }

 
})

export const logOut = createAsyncThunk('/',async()=>{
 const {data} =  await axios.get(
    "https://17106.fullstack.clarusway.com/auth/logout/"
   
  );
  return data
})


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   reset:(state)=>{
    state.data = null
   }
   
  },
  extraReducers:(builder)=>{
    builder.addCase(postUser.pending,(state)=>{
      state.loading = true,
      state.error=""
    }),
    builder.addCase(postUser.fulfilled,(state,{payload})=>{
   
      state.data = payload,
      state.loading = false
    })
    builder.addCase(logUser.pending,(state)=>{
      state.loading = true,
      state.error=""
    }),
    builder.addCase(logUser.fulfilled,(state,{payload})=>{
     
      state.data = payload,
      console.log(state.data,'log')
      state.loading = false
    })
    builder.addCase(logOut.pending,(state)=>{
      state.loading = true,
      state.error=""
    }),
    builder.addCase(logOut.fulfilled,(state)=>{
   
      state.data = null,
      state.loading = false
    })
  }
})

// Action creators are generated for each case reducer function
export const { reset } = userSlice.actions

export default userSlice.reducer


interface User {
  email: string;
  password: string;
  lastname: string;
  firstname: string;
  username: string;
}
