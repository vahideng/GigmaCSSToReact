import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'deepskyblue',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: 'white',
  appContentBg: 'darkgray',
  appBorderColor: 'white',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'black',
  barSelectedColor: 'black',
  barBg: 'deepskyblue',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Aleph Design System',
  brandUrl: 'http://aleph-labs.com/',
  brandImage: 'https://s3-ap-southeast-1.amazonaws.com/kalibrr-company-assets/logos/KNCVG6SYX5U4MJEJEE4T-59001479.png',
});