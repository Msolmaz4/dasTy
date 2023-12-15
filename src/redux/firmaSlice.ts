import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Company {
  _id: string;
  name: string;
  phone: string;
  address: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface firmaState {
  veri: Company | null;
  loading: boolean;
  error: string;
}

const initialState: firmaState = {
  veri: null,
  loading: false,
  error: "",
};

export const alleFirma = createAsyncThunk("/getUser", async (token) => {
  const veri = await axios.get("https://17106.fullstack.clarusway.com/firms", {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  console.log("alleFirma", veri);
  return veri.data;
});
export const deleteFirma = createAsyncThunk("/delete", async ({ id, token }) => {
  console.log(id, 'dddddddddddd');
  console.log(token, 'deletdirmaaaaaaaaaaa');
  const veri = await axios.delete(`https://17106.fullstack.clarusway.com/firms/${id}`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  console.log("deleteFirma", veri);
  return veri.data;
});






export const firmaSlice = createSlice({
  name: "firma",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(alleFirma.pending, (state) => {
      (state.loading = true), (state.error = "");
    }),
      builder.addCase(alleFirma.fulfilled, (state, { payload }) => {
        state.veri = payload,
         state.loading = false;
      });
    builder.addCase(deleteFirma.pending, (state) => {
      (state.loading = true), (state.error = "");
    }),
      builder.addCase(deleteFirma.fulfilled, (state, { payload }) => {
        (state.veri = payload), (state.loading = false);
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = firmaSlice.actions;

export default firmaSlice.reducer;
