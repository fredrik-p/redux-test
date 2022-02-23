import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { StyledEngineProvider } from '@mui/material/styles';

import usersReducer from "./features/Users";
import counterReducer from "./features/Counter";

const store = configureStore({
  reducer: {
    users: usersReducer,
    counter: counterReducer
  },
});

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <App />
      </Provider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


