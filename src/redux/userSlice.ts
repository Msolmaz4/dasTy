
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

export const postUser = createAsyncThunk('/getUser',async(values)=>{
console.log(values,'ilkyer')
const { data } = await axios.post(
  "https://17106.fullstack.clarusway.com/users/",
  values
);
console.log("register",data);
return await data
 
})
export const logUser = createAsyncThunk('/pos',async(values)=>{
  console.log(values,'log')
  const { data} = await axios.post("https://17106.fullstack.clarusway.com/auth/login/",
  values)
  console.log(data,'logus')
return data
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
