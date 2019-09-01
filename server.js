const dotenv = require('dotenv');
const fetch = require('node-fetch');
var shell = require('shelljs');
const express = require('express');
const bodyParser = require('body-parser');
var findColorPage = require('./util');
const fs = require('fs');
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
let stylesArtboard;
function getPalette(stylesArtboard) {
  // empty "palette obj" wheree we will store all colors
  const palette = {};
  // get "palette" artboard
  const paletteAtrboard = stylesArtboard.filter(item => {
    return item.name === 'Colors';
  })[0].children;
  // get colors from each children
  paletteAtrboard.map(item => {
    function rbaObj(obj) {
      return item.fills[0].color[obj] * 255;
    }
    colorObj = {
      [item.name]: {
        value: `rgba(${rbaObj('r')}, ${rbaObj('g')}, ${rbaObj('b')}, ${
          item.fills[0].color.a
        })`,
        type: 'color'
      }
    };

    Object.assign(palette, colorObj);
  });

  return palette;
}

async function getFromApi() {
  let data = {};

  const url =
    'https://api.figma.com/v1/files/' + process.env.REACT_APP_FILE_KEY;

  await fetch(url, {
    headers: {
      'X-Figma-Token': process.env.REACT_APP_FIGMA_TOKEN
    }
  })
    .then(res => res.json())
    .then(json => {
      data = json;
    });

  stylesArtboard = data.document.children.filter(item => {
    return item.name === 'Design tokens';
  })[0].children;

  baseTokeensJSON = {
    token: {
      grids: {},
      spacers: {},
      colors: {},
      fonts: {}
    }
  };

  Object.assign(baseTokeensJSON.token.colors, getPalette(stylesArtboard));
  return baseTokeensJSON;
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  let result = '';
  getFromApi().then(rep => {
    result = baseTokeensJSON;
    // const resuuu = findColorPage(result.document.children);
    
    if (stylesArtboard) {
      var re = getPalette(stylesArtboard);
      

      var json = JSON.stringify(re);

      fs.writeFile('myjsonfile.json', json, 'utf8', err => {
        console.log(err);
      });


    //   shell.exec('./buildScssFile.js')
    //   // shell.exec('/buildScssFile.js', {silent:true}).stdout;

    //   // shell.exec('node buildScssFile.js', function(code, stdout, stderr) {
    //   //   console.log('Exit code:', code);
    //   //   console.log('Program output:', stdout);
    //   //   console.log('Program stderr:', stderr);
    //   // });
     
    // //   exec('node buildScssFile.js', function (error, stdOut, stdErr) {
    // //     // do what you want!
    // // });
      
  
     
    }

    res.send({ AlephDesignTokenFigma: result });
  });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);

  let rr = null;

  getFromApi().then(rep => {
    rr = rep;
  });
});
