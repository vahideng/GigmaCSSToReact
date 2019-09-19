import { configure, addDecorator } from '@storybook/react'
import { withInfo, setDefaults } from '@storybook/addon-info'
import { addParameters } from '@storybook/react';
import alephTheme from './alephTheme';
import './style.scss'
addParameters({
  options: {
    theme: alephTheme,
  },
});
const req = require.context('../src/', true, /stories\.tsx$/)
function loadStories() {
  req.keys().forEach(req)
}

setDefaults({
  inline: true,
})


addDecorator((story, context) => withInfo(context.kind)(story)(context))
configure(loadStories, module)
