import TextField from './TextField';
import { fn } from '@storybook/test';
import { Question, Search } from '../../assets';

export default {
  title: 'Example/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: 'text',
    name: 'text',
    label: 'text',
    placeholder: 'text',
    error: 'text',
    tip: 'text',
    hint: 'text',
    required: 'boolean',
    value: 'text',
    className: 'text',
    disabled: 'boolean',
    outline: 'boolean',
    size: {
      control: 'inline-radio',
      options: ['xs', 'm', 'l', 'xl'],
    },
    dir: { control: 'inline-radio', options: ['rtl', 'ltr'] },
    labelPosition: {
      control: 'inline-radio',
      options: ['inline-left', 'above'],
    },
  },
  args: { onChange: fn() },
};

const args = {
  id: 'email',
  name: 'email',
  placeholder: 'john.dou@gmail.com',
  tip: 'This is a little tip that explain you this field',
  label: 'Email',
  labelPosition: 'above',
  size: 'm',
  dir: 'ltr',
  disabled: false,
  outline: true,
  required: false,
};

export const Primary = {
  args,
};

export const WithIcons = {
  args: { ...args, iconBefore: <Search />, iconAfter: <Question /> },
};

export const WithIconsError = {
  args: {
    ...args,
    required: true,
    error: 'Invalid email.',
    iconBefore: <Search color="#D92D20" />,
    iconAfter: <Question color="#D92D20" />,
  },
};
