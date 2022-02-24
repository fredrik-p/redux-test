import "./App.css";
import {

    Link,

} from "react-router-dom";
import { Typography } from "@mui/material";
import Counter from './Landing/Counter';
import Users from './Landing/Users';


const Landing = () => {


    return (
        <>
            <div className="App">
                <Users />
                <Counter />
                <Link to="/forms" style={{ marginTop: '30px' }}><Typography>FORMS</Typography></Link>
            </div>



        </>
    );
}

export default Landing;