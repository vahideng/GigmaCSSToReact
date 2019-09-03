import  { shallow } from 'enzyme';

import React from 'react';
import Input from './index';


interface IProps {
  labelName?: string;
  placeHolder?: string;
  type: string;
  value?: string | number;
  status?: string;
  errorMessage?: string;
  disabled?: boolean;
}

const props = {
  labelName: '',
  placeHolder: '',
  type: 'text',
  value: '',
  errorMessage: '',
  disabled: false,
  style: ''
};
//setup is factory function to create shallow wrapper
const setup = (props: IProps) => {
  return shallow(
    <Input
      labelName={props.labelName}
      type={props.type}
      status={props.status}
      errorMessage={props.errorMessage}
    />
  );
};

const findByTestAtribute = (wrapper: any, val: string) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test('render withot carashing', () => {
  const wrapper = setup(props);
  expect(wrapper).toBeTruthy(); // it will return true (not empthy string, undefined or null)
  
  
  const inputComponents = findByTestAtribute(wrapper, 'inputComponent');
  expect(inputComponents.length).toBe(1);
});

test('render error message if props.status is equal to Error ', () => {
  const wrapper = setup({ ...props, status: 'Error' });
  const inputComponents = findByTestAtribute(wrapper, 'errorMessage');
  expect(inputComponents.length).toBe(1);
});

test('Do not render error message if props.status is  not equal to Error ', () => {
  const wrapper = setup({ ...props, status: 'Active' });
  const inputComponents = findByTestAtribute(wrapper, 'errorMessage');
  expect(inputComponents.length).toBe(0);
});

test('render label Input if props.labelName is not null ', () => {
  const wrapper = setup({ ...props, labelName: 'Your Name' });
  const inputComponents = findByTestAtribute(wrapper, 'labelInput');
  expect(inputComponents.length).toBe(1);
});

it('render correctly Input component', () => {
  const wrapper = setup(props);

  expect(wrapper).toMatchSnapshot();
});


