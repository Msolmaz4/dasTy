import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
 import { BrowserRouter } from "react-router-dom";
 import { StyledEngineProvider } from '@mui/material/styles';
 import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.createRoot(document.getElementById("root")!).render(
 
  <BrowserRouter>
  <Provider store={store}>
    
     <StyledEngineProvider injectFirst>
     <PersistGate loading={null} persistor={persistor}>
    <App /> 
    </PersistGate>
    </StyledEngineProvider>
  </Provider>
  </BrowserRouter>
 
);
