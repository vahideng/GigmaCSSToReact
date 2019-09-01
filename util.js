function findColorPage(pages) {
  let result = [];
  let isFoundRightPage = false
  let srarchForColor;

  pages.forEach(page => {
    let fixedPageName = page.name.toLowerCase().replace(' ', '');

    if (fixedPageName === 'designtokens') {
      isFoundRightPage = true

    srarchForColor = page
    console.log(srarchForColor,"srarchForColor");
    

    }
  });
  if (isFoundRightPage && srarchForColor) {

    
    srarchForColor.children.forEach(token => {
      let _name = token.name.toLowerCase();
      if (
        _name === 'color' ||
        _name === 'colour' ||
        _name === 'colors' ||
        _name === 'colours'
      ) {
       
        token.children.forEach(color => {
          const colorString = `rgba(${roundColorValue(
            color.fills[0].color.r,
            255
          )}, ${roundColorValue(
            color.fills[0].color.g,
            255
          )}, ${roundColorValue(
            color.fills[0].color.b,
            255
          )}, ${roundColorValue(color.fills[0].color.a, 1)})`;

          console.log(colorString, 'colorString');
          console.log(color, "colororoororooroorororor");
          

          result.push({name :color.name ,  colorString})
        });
      }
    
    });
    return result;
 
  }
}

function roundColorValue(quantity, scale = 255) {
  return (parseFloat(quantity) * parseInt(scale)).toFixed(0);
}

module.exports = findColorPage;
