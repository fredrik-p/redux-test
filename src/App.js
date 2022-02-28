import "./App.css";
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import MuiComponents from './MuiComponents';
import Mui from './Components/Mui';
import ReduxTest from './ReduxTest';
import NotFound from './NotFound';


const App = () => {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/redux" element={<ReduxTest />}
          />
          <Route path="/mui-components" element={<MuiComponents />}
          />
          <Route path="/mui-components-2" element={<Mui />}
          />
          <Route path="*" element={<NotFound />} >
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
