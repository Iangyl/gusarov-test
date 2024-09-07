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
    placeholder: 'text',
    size: {
      control: 'inline-radio',
      options: ['xs', 'm', 'l', 'xl'],
    },
    dir: { control: 'inline-radio', options: ['rtl', 'ltr'] },
  },
  args: { onChange: fn() },
};

export const Primary = {
  args: {
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
  },
};

export const WithIcons = {
  args: {
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
    iconBefore: <Search />,
    iconAfter: <Question />,
  },
};

export const WithIconsError = {
  args: {
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
    required: true,
    error: 'Invalid email.',
    iconBefore: <Search color="#D92D20" />,
    iconAfter: <Question color="#D92D20" />,
  },
};
