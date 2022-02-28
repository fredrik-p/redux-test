import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import MuiComp from "./MuiComp";
import ButtonsResult from "./ButtonsResult";
import Typography from '@mui/material/Typography';
import './muiformstyle.css'
import {
    Link,
} from "react-router-dom";

const defaultValues = {
    Native: "",
    TextField: "",
    Select: "",
    Checkbox: false,
    switch: false,
    RadioGroup: "",
};

function Mui() {
    const { handleSubmit, reset, setValue, control } = useForm({ defaultValues });
    const [data, setData] = useState(null);

    return (
        <>
            <form onSubmit={handleSubmit((data) => setData(data))} className="form">
                <MuiComp control={control} />
                <hr />
                <ButtonsResult {...{ data, reset, setValue }} />
            </form>
            <div className="form" style={{ marginTop: "20px" }}> <Link to="/" style={{ marginTop: '30px' }}><Typography sx={{ color: 'black' }}>BACK</Typography></Link></div>
        </>
    );
}

export default Mui;
