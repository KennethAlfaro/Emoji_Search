import './App.css';
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { FilterByKeyword } from './Components/FilterByKeyword';
import { FilterByName }  from './Components/FilterByName'
import { ThemeProvider } from '@emotion/react';


 function App() {
  const [value, setValue] = React.useState(0)


    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const theme = createTheme({
      palette: {
        primary: {
          main:	'#B5B2B2',
        },
        secondary: {
          main: '#191919',
        },
      },
    })

  
  return (
    <div className="App">
  
  <nav>
    <ThemeProvider theme = {theme}>
  <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
      <AppBar position="static">
        <Tabs
          
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Filter by :" disabled />
          <Tab label="Name"  />
          <Tab label="Keywords" />
        </Tabs>
      </AppBar>
    </Box>
    </ThemeProvider>
    </nav>
      {value <= 1? (
        <FilterByName></FilterByName>
      ) : (
        <FilterByKeyword></FilterByKeyword>
      )}
    </div>
  );
    
}

export default App;