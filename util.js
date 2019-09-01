baseTokeensJSON = {
  token: {
      grids: {},
      spacers: {},
      colors: {},
      fonts: {}
  }
};

function findColorPage(pages) {
  let result = [];
  let isFoundRightPage = false;
  let srarchForColor;

  pages.forEach(page => {
    let fixedPageName = page.name.toLowerCase().replace(' ', '');

    if (fixedPageName === 'designtokens') {
      isFoundRightPage = true;

      srarchForColor = page;
      console.log(srarchForColor, 'srarchForColor');
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
          console.log(color, 'colororoororooroorororor');

          const hex = rgba2hex(colorString);
          console.log(hex, 'gex');

          result.push({ name: color.name, hex });
        });
      }
    });
    return result;
  }
}

function roundColorValue(quantity, scale = 255) {
  return (parseFloat(quantity) * parseInt(scale)).toFixed(0);
}

function rgba2hex(orig) {
  var a,
    isPercent,
    rgb = orig
      .replace(/\s/g, '')
      .match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
    alpha = ((rgb && rgb[4]) || '').trim(),
    hex = rgb
      ? (rgb[1] | (1 << 8)).toString(16).slice(1) +
        (rgb[2] | (1 << 8)).toString(16).slice(1) +
        (rgb[3] | (1 << 8)).toString(16).slice(1)
      : orig;

  if (alpha !== '') {
    a = alpha;
  } else {
    a = 01;
  }
  // multiply before convert to HEX
  a = ((a * 255) | (1 << 8)).toString(16).slice(1);
  hex = hex + a;

  return hex;
}

module.exports = findColorPage;
