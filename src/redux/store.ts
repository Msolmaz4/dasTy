import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import firmaSlice from "./firmaSlice";
import productSlice from "./productSlice";
import saleSlice from "./saleSlice";
import  purSlice  from "./purchasesSlice";


export const store = configureStore({
  reducer: {
    user: userSlice,
    firma: firmaSlice,
    product:productSlice,
    sales:saleSlice,
    purchases:purSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
