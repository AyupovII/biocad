import React, { useState } from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { TextField } from '@mui/material';
import Content from './components/Content/Content';

const theme = createTheme();

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header"></header>
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;