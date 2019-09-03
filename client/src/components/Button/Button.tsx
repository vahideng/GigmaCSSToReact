import React, {useEffect, useState} from 'react';
import axios from '../../axios.config';

import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import {
  createMuiTheme,
  makeStyles,
  withStyles
} from '@material-ui/core/styles';





const AlephButton = (props: any) => {


  const [colorsApi, setColors] = useState()
 let colors:any = null
 
  
  if(colorsApi){
    console.log(colorsApi.token.colors,"colorsApi");
    colors= colorsApi.token.colors
  }
  //  const colors = props.styleFromFigma;

  console.log(colors, 'cc');

  // const {Primary_auto_fill,Primary_disabled} = props.styleFromFigma&& props.styleFromFigma.colors
  // console.log(Primary_auto_fill,"Primary_auto_fill")

  useEffect(() => {
    console.log("componentDidMount");
    axios.get(`figma-token`).then((res) => {
      
      setColors(res.data.AlephDesignTokenFigma)
      
    });
    return () => {
      console.log("componentWillUnmount");
    
    };
  }, [colors]); // empty-array means don't watch for any updates


  const AlephButton = withStyles({
    root: {
      margin: '10px',
      borderRadius: '8px',
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      height: '56px',
      width: '256px',
      lineHeight: 1.5,
      borderColor: '#007bff',
      fontFamily: [
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc'
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf'
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
      }
    }
  })(Button);

  const ColorButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
      '&:hover': {
        backgroundColor: purple[700]
      }
    }
  }))(Button);

  const useStyles = makeStyles((theme: any) => ({
    primary: {
      color: '#FFFFFF',
      
      backgroundColor: `${colors ? colors.Primary.value: "blue" }`
    },

    primaryWhiteBackground: {
      backgroundColor: '#FFFFFF',
      color: '#00694B'
    },
    PrimaryDisabled: {
      // backgroundColor: `${colors.Primary_disabled.value}`,
      color: '#FFFFFF',
      pointerEvents: 'none'
    },
    PrimaryDisabledNoBackgroud: {
      // backgroundColor: `${colors.primary_nobackground.value}`,
      color: '#000000',
      pointerEvents: 'none',
      border: ' 2px solid #D5DADD'
    },
    PrimaryAutoFill: {
      color: '#000000',

      // backgroundColor: `${colors.Primary_auto_fill.value}`
    }
  }));

  const theme = createMuiTheme({
    palette: {
      primary: green
    }
  });
  const classes = useStyles();
  let classType = '';

  switch (props.type) {
    case 'primary': {
      classType = classes.primary;
      break;
    }
    case 'primaryWhiteBackground': {
      classType = classes.primaryWhiteBackground;
      break;
    }
    case 'PrimaryDisabled': {
      classType = classes.PrimaryDisabled;
      break;
    }
    case 'PrimaryDisabledNoBackgroud': {
      classType = classes.PrimaryDisabledNoBackgroud;
      break;
    }
    case 'PrimaryAutoFill': {
      classType = classes.PrimaryAutoFill;
      break;
    }
  }

  return (
    

    
    <>
      <AlephButton variant="contained" className={classType}>
        {props.title}
      </AlephButton> 
    </>
  );
};

export default AlephButton;
