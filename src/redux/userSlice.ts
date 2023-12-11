import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface userState {
  user:string
}

const initialState: userState = {
user:''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   
  },
})

// Action creators are generated for each case reducer function
export const {  } = userSlice.actions

export default userSlice.reducer