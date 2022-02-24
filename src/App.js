import "./App.css";
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Forms from './Forms';
import SignUpForm from './Login/SignUpForm';
import MuiComponents from './MuiComponents';

import ReduxTest from './ReduxTest';
import NotFound from './NotFound';


const App = () => {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/signup" element={<SignUpForm />}
          />
          <Route path="/redux" element={<ReduxTest />}
          />
          <Route path="/mui-components" element={<MuiComponents />}
          />
          <Route path="*" element={<NotFound />} >
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
