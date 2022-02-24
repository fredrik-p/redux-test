import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { StyledEngineProvider } from '@mui/material/styles';
import usersReducer from "./features/Users";
import counterReducer from "./features/Counter";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const store = configureStore({
  reducer: {
    users: usersReducer,
    counter: counterReducer
  },
});

ReactDOM.render(
  <React.StrictMode>

    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </StyledEngineProvider>

  </React.StrictMode>,
  document.getElementById("root")
);


