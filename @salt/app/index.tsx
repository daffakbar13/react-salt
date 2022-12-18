import * as React from 'react';
import { Routes } from '../routes';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@mui/material';
import theme from '../styles/theme';
import GlobalStyles from '@mui/material/GlobalStyles';


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
      styles={{
        body:{
          backgroundColor: theme.palette.primary.main,
          margin: '20px 5%',
          fontFamily: 'Roboto',
          '& ::-webkit-scrollbar' : {
            display: 'none',
            width: 0,
            background: 'transparent'
          }
        }
      }} />
      <Routes/>
    </ThemeProvider>
  );
}
