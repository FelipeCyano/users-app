import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './styles/global.css';

export default function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#422C76"
      },
      secondary: {
        main: "#FF2f69"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  )
}