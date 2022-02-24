import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme(({
    typography: {
        fontFamily: ['Roboto', 'serif'].join(','),
    }


}))

theme = responsiveFontSizes(theme);


export default theme;