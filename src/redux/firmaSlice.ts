import {  createSlice } from "@reduxjs/toolkit";


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
  veri: [] |Company | null;
  loading: boolean;
  error: string;
  son: Company | null;
}

const initialState: firmaState = {
  veri: null,
  loading: false,
  error: "",
  son:null,
};

// export const alleFirma = createAsyncThunk("/get", async (token) => {
//   const veri = await axios.get("https://17106.fullstack.clarusway.com/firms", {
//     headers: {
//       Authorization: `Token ${token}`,
//     },
//   });
//   console.log("alleFirma", veri);
//   return veri.data;
// });
// export const deleteFirma = createAsyncThunk("/delete", async ({ id, token }) => {
//   console.log(id, 'dddddddddddd');
//   console.log(token, 'deletdirmaaaaaaaaaaa');
//   const veri = await axios.delete(`https://17106.fullstack.clarusway.com/firms/${id}`, {
//     headers: {
//       Authorization: `Token ${token}`,
//     },
//   });
//   console.log("deleteFirma", veri);
//   return veri.data;
// });
// export const neueFirma = createAsyncThunk("/neue", async ({values,token}) => {
//   console.log(values, 'dddddddddddd');

//   const veri = await axios.post(`https://17106.fullstack.clarusway.com/firms/`, values, {
//     headers: {
//       Authorization: `Token ${token}`,
//     },
//   })
   
//   console.log("neue", veri);
//   return veri.data;
// });





export const firmaSlice = createSlice({
  name: "firma",
  initialState,
  reducers: {
    getSuccess:(state,{payload})=>{
      console.log(payload,'getSucces')
      state.veri=payload,
      console.log(state.veri,'getveri')
      state.loading = false;
    },
    deletSuccess:(state,{payload})=>{
      state.veri=payload,
      state.loading = false;
    },
    neueFirma:(state,{payload})=>{
      state.veri=payload,
      console.log(state.veri,"neuREDUX")
      state.loading = false;
    },
    updateFirma:(state,{payload})=>{
      state.veri=payload,
      state.loading = false;
    },
  },

  extraReducers: () => {
    // builder.addCase(alleFirma.pending, (state) => {
    //   (state.loading = true), (state.error = "");
    // }),
    //   builder.addCase(alleFirma.fulfilled, (state, { payload }) => {
    //     state.veri = payload,
    //      state.loading = false;
    //   });
    // builder.addCase(deleteFirma.pending, (state) => {
    //   (state.loading = true), (state.error = "");
    // }),
    //   builder.addCase(deleteFirma.fulfilled, (state, { payload }) => {
    //     (state.veri = payload), (state.loading = false);
    //   });
  },
});

// Action creators are generated for each case reducer function
export const { getSuccess,deletSuccess,neueFirma,updateFirma} = firmaSlice.actions;

export default firmaSlice.reducer;
