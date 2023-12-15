import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import {  store } from "./redux/store.ts";
 import { BrowserRouter } from "react-router-dom";
 import { StyledEngineProvider } from '@mui/material/styles';



ReactDOM.createRoot(document.getElementById("root")!).render(
 
  <BrowserRouter>
  <Provider store={store}>
    
     <StyledEngineProvider injectFirst>
 
    <App /> 
    
    </StyledEngineProvider>
  </Provider>
  </BrowserRouter>
 
);
