import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import {
    Link,
} from "react-router-dom";
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import Container from '@mui/material/Container';
import FormDemo from './FormDemo';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const classes = useStyles();
    //const { register, handleSubmit, control } = useForm()

    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <FormDemo />
                <Link to="/" style={{ marginTop: '30px' }}><Typography sx={{ color: 'darkgrey' }}>BACK</Typography></Link>

            </div>
        </Container>
    );
}