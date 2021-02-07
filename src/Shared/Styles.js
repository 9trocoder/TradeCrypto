const theme = 'dark';
//const theme = 'light';
export const lightTheme = theme === 'light';

export const color = lightTheme ? 'white' : '#061a44';
export const color2 = lightTheme ? 'white' : '#13161b';
export const color3 = lightTheme ? '#09f010' : 'orange';

if (lightTheme) {
  document.body.style.background = '#e1eaee';
  document.body.style.color = '#061a44';
}

export const lightBlueBackground = `background-color: teal`;
export const backgroundColor2 = `background-color: ${color2};`;
export const greenBackgroundColor = `background-color: ${color3};`;

export const fontColorGreen = `color: #03A9F4`;
export const fontColorWhite = `color: white`;
export const subtleBoxShadow = `border: 0.5px solid grey; border-radius: 1px; background-color: teal; padding: 10px;`;
export const greenBoxShadow = `background-color: #13161b; color: orange;`;
export const redBoxShadow = `box-shadow: 0px 0px 2px 2px #e41111;`;

export const fontSizeBig = 'font-size: 2em';
export const fontSize1 = 'font-size: 1.2em;';
export const fontSize2 = 'font-size: 1.0em';
export const fontSize3 = 'font-size: .75em';

export const textAlignCenter = 'text-align: center;';
