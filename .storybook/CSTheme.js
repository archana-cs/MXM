import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  /*  colorPrimary: '#3F51B5',
    colorSecondary: 'deepskyblue',

    // UI
    appBg: '#3F51B5',
    appContentBg: '#FAFAFA',
    appBorderColor: '#3F51B5',
    appBorderRadius: 5,

    // Typography
    fontBase: '"Nunito Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: 'black',
    textInverseColor: '#AAAAAA',

    // Toolbar default and active colors
    barTextColor: '#EEEEEE',
    barSelectedColor: '#FFFFFF',
    barBg: '#3F51B5',

    // Form colors
    inputBg: 'white',
    inputBorder: 'silver',
    inputTextColor: 'black',
    inputBorderRadius: 4, */

  colorPrimary: '#3F51B5',
  colorSecondary: '#3F51B5', // sidebar selection color
  appBg: '#F1F5F8', // left sidebar and background color
  barBg: '#F5F9FC', // content-bar background color
  barSelectedColor: '#3F51B5', // content-bar selection color

  brandTitle: 'MXM storybook',
  brandUrl: 'https://www.contentserv.com',
  brandImage: 'https://www.contentserv.com/wp-content/uploads/2018/07/contentserv_logo.png'
});
