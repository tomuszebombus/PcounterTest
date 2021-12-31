import {createTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import NavBar from './components/navBar';
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';

import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';

const theme = createTheme({
  palatte: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 600,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem"
  },
  grid:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
})

function App() {
  const classes = styles ();
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>

        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="black">
          Pcounter Makes Your Page Count!
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="black">
          At Pcounter we are passionate about printing and technology. With more than 30 years in the industry we have the expertise needed to quickly resolve any technical issue while simutaneously training onsite IT to operate and maintain their systems.
          </Typography>
        </div>

        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<SecurityIcon style={{fill: "#4360A6", height: "130", width: "125"}}/>} title="Security" btnTitle="Show me More" />
          <Grid icon={<EventNoteIcon style={{fill: "#449A76", height: "130", width: "125"}}/>} title="Performance" btnTitle="Show me More" />
          <Grid icon={<TrendingUpIcon style={{fill: "#D05B2D", height: "130", width: "125"}}/>} title="Reliability" btnTitle="Show me More" />
        </div>

        <div className={`${classes.grid} ${classes.littleSpace}`}>
          <Grid icon={<ImportExportIcon style={{fill: "#5EA780", height: "130", width: "125"}}/>} title="XXX" btnTitle="Show me More" />
          <Grid icon={<ComputerIcon style={{fill: "#E69426", height: "130", width: "125"}}/>} title="YYY" btnTitle="Show me More" />
          <Grid icon={<HttpIcon style={{fill: "#2EA09D", height: "130", width: "125"}}/>} title="ZZZ" btnTitle="Show me More" />
        </div>  
        <div className={classes.bigSpace}>
          <Footer/>
        </div>    
      </ThemeProvider>
    </div>
  );
}


export default App;
