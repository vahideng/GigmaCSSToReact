// import { boolean, text, withKnobs } from '@storybook/addon-knobs';
// import { storiesOf } from '@storybook/react';
// import React from 'react';

// import { addReadme } from 'storybook-readme';

// import AlephButton from '../src/components/Button/Button';


// import TextBox from '../src/components/textField/index';



// import ButtonRedme from './alephButtonRedme.md';

// import readme from './textFieldRedme.md';


// const storiesOfTextFields = storiesOf('Forms Elements/Text Field', module);
// storiesOfTextFields.addDecorator(withKnobs);
// storiesOfTextFields.addDecorator(addReadme);

// storiesOfTextFields.addParameters({
//   readme: {
//     // Show readme before story
//     content: readme,
//     fontBase: '"Roboto", sans-serif',
//     fontCode: 'monospace'

//     // Show readme at the addons panel
//   }
// });
// storiesOfTextFields.add('Text Field', () => {
//   const labelName = text('Label Name', ' First Name');
//   const errorMessage = text('Error Message', 'Please enter  First first name');
//   const value = text('Value', 'Catherine Lam');

//   return (
   
//       <>
//         <br />
//         <p style={{ paddingLeft: '10px' }}>Default TextField</p>
//         <TextBox
//           labelName={`${labelName}`}
//           type="text"
//           placeHolder="Enter name"
//         />
//         <br />
//         <p style={{ paddingLeft: '10px' }}>Active TextField</p>
//         <TextBox
//           labelName={`${labelName}`}
//           type="text"
//           placeHolder="Enter name"
//           status="Active"
//         />
//         <br />
//         <p style={{ paddingLeft: '10px' }}>Disabled TextField</p>
//         <TextBox
//           disabled={boolean('Disabled', true)}
//           labelName={`${labelName}`}
//           type="text"
//           status="Disabled"
//         />
//         <br />
//         <p style={{ paddingLeft: '10px' }}>Error TextField</p>
//         <TextBox
//           labelName={`${labelName}`}
//           type="text"
//           disabled={boolean('Disabled', true)}
//           status="Error"
//           errorMessage={`${errorMessage}`}
//         />
//         <br />
//         <p style={{ paddingLeft: '10px' }}>Filled TextField</p>
//         <TextBox
//           labelName={`${labelName}`}
//           type="text"
//           status="Filled"
//           value={`${value}`}
//         />
//       </>

//   );
// });

// const storiesOfButton = storiesOf('CATs', module);
// storiesOfButton.addDecorator(withKnobs);
// storiesOfButton.addDecorator(addReadme);

// storiesOfButton.addParameters({
//   readme: {
//     // Show readme before story
//     content: ButtonRedme,
//     fontBase: '"Roboto", sans-serif',
//     fontCode: 'monospace'

//     // Show readme at the addons panel
//   }
// });
// storiesOfButton.add(
//   ' Primary Button',

//   () => {
//     const labelName = text('Label Name', ' First Name');

//     const value = text('Value', 'Catherine Lam');
//     return (
    
//         <>
//           <br />
//           <p style={{ paddingLeft: '10px' }}>Primary Button</p>
//           <AlephButton type="primary" title="Find my event" />
//           <AlephButton
//             type="primaryWhiteBackground"
//             title="Learn More About INSEAD"
//           />

//           <br />
//           <p style={{ paddingLeft: '10px' }}>Primary Disabled</p>
//           <AlephButton type="PrimaryDisabled" title="Find my event" />
//           <AlephButton type="PrimaryDisabledNoBackgroud" title="Filter" />

//           <br />
//           <p style={{ paddingLeft: '10px' }}>Primary AutoFill</p>
//           <AlephButton type="PrimaryAutoFill" title="AutoFill with" />
//           <br />
//         </>
     
//     );
//   }
// );

//////////////

// const storiesOfAutoComplete = storiesOf('Forms Elements/AutoComplete', module);

// storiesOfAutoComplete.addDecorator(addReadme);

// storiesOfAutoComplete.addParameters({
//   readme: {
//     // Show readme before story
//     content: autoCompleteRedme,
//     fontBase: '"Roboto", sans-serif',
//     fontCode: 'monospace'

//     // Show readme at the addons panel
//   }
// });
// storiesOfAutoComplete.add(
//   ' Auto Complete Text Field',

//   () => {
//     return (
//       <>
//         <br />
//         <p style={{ paddingLeft: '10px' }}>Auto Complete Text Field</p>
//         <AutoComplete />
//       </>
//     );
//   }
// );

// ///////////

// const storiesOfCheckbox = storiesOf('CATs/Checkbox', module);

// storiesOfCheckbox.addDecorator(addReadme);

// storiesOfCheckbox.addParameters({
//   readme: {
//     // Show readme before story
//     content: checkboxRedme,
//     fontBase: '"Roboto", sans-serif',
//     fontCode: 'monospace'

//     // Show readme at the addons panel
//   }
// });
// storiesOfCheckbox.add(
//   ' Auto Complete Text Field',

//   () => {
//     return (
//       <>
//         <br />
//         <p style={{ paddingLeft: '10px' }}>Checkboxe Component</p>
//         <Checkbox />
//       </>
//     );
//   }
// );

// ////////
// const storiesOfNavbar = storiesOf('navbar', module);

// storiesOfNavbar.addDecorator(addReadme);

// storiesOfNavbar.addParameters({
//   readme: {
//     // Show readme before story
//     content: NAVBARRedme,
//     fontBase: '"Roboto", sans-serif',
//     fontCode: 'monospace'

//     // Show readme at the addons panel
//   }
// });
// storiesOfNavbar.add(
//   ' Auto Complete Text Field',

//   () => {
//     return (
//       <>
//         <br />
//         <p style={{ paddingLeft: '10px' }}>
//           If you have multiple options appearing in a list, you can preserve
//           space by using checkboxes instead of on/off switches. If you have a
//           single option, avoid using a checkbox and use an on/off switch
//           instead.
//         </p>
//         <Navbar />
//       </>
//     );
//   }
// );
// //////

// const storiesOfFigma = storiesOf('Figma component', module);

// storiesOfFigma.addDecorator(addReadme);

// storiesOfFigma.addParameters({
//   readme: {
//     // Show readme before story
//     content: FigmaCOmponentRedmde,
//     fontBase: '"Roboto", sans-serif',
//     fontCode: 'monospace'

//     // Show readme at the addons panel
//   }
// });
// storiesOfFigma.add(
//   ' Auto Complete Text Field',

//   () => {
//     return (
//       <>
//         <br />

//         <MasterAlephFrame />
//       </>
//     );
//   }
// );
