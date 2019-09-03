import React from 'react';

import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { addReadme } from 'storybook-readme';

//
import Button from '../components/Button/Button';
import TextBox from '../components/textField';
import ButtonRedme from './alephButtonRedme.md';
import readme from './textFieldRedme.md';
//

// import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => (
//   <Welcome showApp={linkTo('Button')} />
// ));

// storiesOf('Button', module)
//   .add('with text', () => (
//     <Button onClick={action('clicked')}>Hello Button</Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));

const storiesOfTextFields = storiesOf('Forms Elements/Text Field', module);
storiesOfTextFields.addDecorator(withKnobs);
storiesOfTextFields.addDecorator(addReadme);

storiesOfTextFields.addParameters({
  readme: {
    // Show readme before story
    content: readme,
    fontBase: '"Roboto", sans-serif',
    fontCode: 'monospace'

    // Show readme at the addons panel
  }
});
storiesOfTextFields.add('Text Field', () => {
  const labelName = text('Label Name', ' First Name');
  const errorMessage = text('Error Message', 'Please enter  First first name');
  const value = text('Value', 'Catherine Lam');

  return (
   
      <>
        <br />
        <p style={{ paddingLeft: '10px' }}>Default TextField</p>
        <TextBox
          labelName={`${labelName}`}
          type="text"
          placeHolder="Enter name"
        />
        <br />
        <p style={{ paddingLeft: '10px' }}>Active TextField</p>
        <TextBox
          labelName={`${labelName}`}
          type="text"
          placeHolder="Enter name"
          status="Active"
        />
        <br />
        <p style={{ paddingLeft: '10px' }}>Disabled TextField</p>
        <TextBox
          disabled={boolean('Disabled', true)}
          labelName={`${labelName}`}
          type="text"
          status="Disabled"
        />
        <br />
        <p style={{ paddingLeft: '10px' }}>Error TextField</p>
        <TextBox
          labelName={`${labelName}`}
          type="text"
          disabled={boolean('Disabled', true)}
          status="Error"
          errorMessage={`${errorMessage}`}
        />
        <br />
        <p style={{ paddingLeft: '10px' }}>Filled TextField</p>
        <TextBox
          labelName={`${labelName}`}
          type="text"
          status="Filled"
          value={`${value}`}
        />
      </>
 
  );
});

const storiesOfButton = storiesOf('CATs', module);
storiesOfButton.addDecorator(withKnobs);
storiesOfButton.addDecorator(addReadme);

storiesOfButton.addParameters({
  readme: {
    // Show readme before story
    content: ButtonRedme,
    fontBase: '"Roboto", sans-serif',
    fontCode: 'monospace'

    // Show readme at the addons panel
  }
});


storiesOfButton.add(
  ' Primary Button',

  () => {
    const labelName = text('Label Name', ' First Name');

    const value = text('Value', 'Catherine Lam');
    return (
    
        <>
          <br />
          <p style={{ paddingLeft: '10px' }}>Primary Button</p>
          <Button
            
            title="Add"
            type="primary"
          />
          <br />
        </>
 
    );
  }
);
