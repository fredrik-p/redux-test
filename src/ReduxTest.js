import "./App.css";
import Counter from './Redux/Counter';
import Users from './Redux/Users';
import { Typography } from "@mui/material";

import {

    Link,

} from "react-router-dom";

const ReduxTest = () => {


    return (
        <>
            <div className="App">
                <Users />
                <Counter />
                <Link to="/" underline="hover" style={{ marginTop: '30px' }}><Typography sx={{ color: 'darkgrey' }}>BACK</Typography></Link>
            </div>



        </>
    );
}

export default ReduxTest;