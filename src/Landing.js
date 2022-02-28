import "./App.css";
import {

    Link,

} from "react-router-dom";
import { Typography } from "@mui/material";



const Landing = () => {


    return (
        <>
            <div className="App">
                <Link to="/redux" style={{ marginTop: '30px', }}><Typography className="menu-links">REDUX</Typography></Link>
                <Link to="/mui-components" style={{ marginTop: '30px' }}><Typography className="menu-links">MUI COMPONENTS (REUSABLE)</Typography></Link>
                <Link to="/mui-components-2" style={{ marginTop: '30px' }}><Typography className="menu-links">MUI FORM 2</Typography></Link>
            </div>



        </>
    );
}

export default Landing;