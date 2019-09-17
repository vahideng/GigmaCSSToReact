const dotenv = require('dotenv');
const fetch = require('node-fetch');
const StyleDictionary = require('./buildScssFile');
const express = require('express');
const bodyParser = require('body-parser');
var findColorPage = require('./util');
const fs = require('fs');
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
let alephDesignToken;

function getColor(colors) {
  const palette = {};

  colors.map(item => {
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

const getFont = fontFile => {
  const fontObject = {};
  fontFile.map(font => {
    fontSize = {
      [font.name]: {
        value: `${font.style.fontSize}px`,
        type: 'typography'
      }
    };
    Object.assign(fontObject, fontSize);
  });

  return fontObject;
};

const getFontWeights = fontWeight => {
  const fontWeightsObject = {};
  fontWeight.map(fw => {
    fontWeights = {
      [fw.name]: {
        value: `${fw.style.fontWeight}px`,
        type: 'typography'
      }
    };
    Object.assign(fontWeightsObject, fontWeights);
  });

  return fontWeightsObject;
};

const getSpacer = spacer => {
  const getSpacerObject = {};
  spacer.map(sp => {
    Spacer = {
      [sp.name]: {
        value: sp.absoluteBoundingBox.height,
        type: 'spacers'
      }
    };

    Object.assign(getSpacerObject, Spacer);
  });
  return getSpacerObject;
};

const getPhotoSize = photo => {
  const getPhotoSizeObject = {};
  photo.map(ph => {
    photoSize = {
      [`${ph.name}-height`]: {
        value: ph.absoluteBoundingBox.height,

        type: 'imageSize'
      },
      [`${ph.name}-width`]: {
        value: ph.absoluteBoundingBox.width,

        type: 'imageSize'
      }
    };
    Object.assign(getPhotoSizeObject, photoSize);
  });
  return getPhotoSizeObject;
};


const getFontFamily = fontFamily =>{

 
  getFontFamilyObject = {}
  fontFamily.map(ff=>{
    fontFamilies= {
      
      [ff.name] :{
          value : `"${ff.style.fontFamily}"`,
          type: "typography"
      }
    }
    Object.assign(getFontFamilyObject, fontFamilies);
  })

  return getFontFamilyObject
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//////

const getFromApi2 = async () => {
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

  alephDesignToken = data.document.children.filter(item => {
    return item.name === 'Design tokens';
  })[0].children;

  const colors = alephDesignToken
    .filter(child => child.name === 'Colors')[0]
    .children.filter(child => child.type !== 'TEXT');

  //console.log(colors, 'colors');

  const gradients = alephDesignToken
    .filter(child => child.name === 'Gradients')[0]
    .children.filter(child => child.type !== 'TEXT');

  const fontSize = alephDesignToken
    .filter(child => child.name === 'Font Sizes')[0]
    .children.filter(child => child.type === 'TEXT');

  //console.log(desktopFonts, 'desktopFonts');

  const FontWeights = alephDesignToken
    .filter(child => child.name === 'Font Weights')[0]
    .children.filter(child => child.type === 'TEXT');

  const spacers = alephDesignToken
    .filter(item => item.name === 'Spacing')[0]
    .children.filter(child => child.type !== 'TEXT');

  const photoSize = alephDesignToken
    .filter(item => item.name === 'Photo')[0]
    .children.filter(child => child.type !== 'TEXT');


    const fontFamily = alephDesignToken.filter(item=>item.name === "font-family")[0].children;
 
    
    const buttons = alephDesignToken.filter(item=>item.name==="Buttons")[0].children
      
    console.log(buttons,"buttons");
      

  

  alephDesignTokenObject = {
    token: {}
  };

  return {
    ...alephDesignTokenObject.token,
    colors: getColor(colors),
    fontSize: getFont(fontSize),
    fontWeights: getFontWeights(FontWeights),
    spacer: getSpacer(spacers),
    photoSize: getPhotoSize(photoSize),
    fontFamily : getFontFamily(fontFamily)
  };
};

/////

app.get('/api/figma-token', (req, res) => {
 

  let result = '';

  getFromApi2().then(rep => {
    result = JSON.stringify(rep);
    

    

    fs.writeFile('alephJasonData.json', result, 'utf8', err => {
      console.log(err);
    });
    StyleDictionary.buildAllPlatforms();
    // const resuuu = findColorPage(result.document.children);

    // if (alephDesignToken) {
    //   var re = getPalette(alephDesignToken);

    //   var json = JSON.stringify(re);

    //   fs.writeFile('myjsonfile.json', json, 'utf8', err => {
    //     console.log(err);
    //   });
    // }

    res.send({ AlephDesignTokenFigma: result });
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  // getFromApi().then(res=>{
  //   console.log(res,"inja");

  //  // StyleDictionary.buildAllPlatforms();
  // })
  let rr = null;
});
