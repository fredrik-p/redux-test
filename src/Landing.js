import "./App.css";
import {

    Link,

} from "react-router-dom";
import { Typography } from "@mui/material";



const Landing = () => {


    return (
        <>
            <div className="App">
                <Link to="/redux" style={{ marginTop: '30px', }}><Typography sx={{ fontSize: '30px', color: 'darkgrey' }}>REDUX</Typography></Link>
                <Link to="/forms" style={{ marginTop: '30px' }}><Typography sx={{ fontSize: '30px', color: 'darkgrey' }}>LOGIN (REACT HOOK FORM + MUI)</Typography></Link>
                <Link to="/mui-components" style={{ marginTop: '30px' }}><Typography sx={{ fontSize: '30px', color: 'darkgrey' }}>MUI COMPONENTS (REUSABLE)</Typography></Link>
            </div>



        </>
    );
}

export default Landing;