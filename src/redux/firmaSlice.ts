
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'



export interface firmaState {
   data:firma | null,
   loading:boolean,
   error:string

}
 
const initialState: firmaState = {
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


export const firmaSlice = createSlice({
  name: 'firma',
  initialState,
  reducers: {
 
   
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
   
  }
})

// Action creators are generated for each case reducer function
export const { } = firmaSlice.actions

export default firmaSlice.reducer



interface firma {

}