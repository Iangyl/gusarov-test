import Tooltip from './Tooltip';

export default {
  title: 'Example/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tip: 'text',
    tailPosition: {
      control: 'inline-radio',
      options: ['left', 'top', 'right', 'bottom'],
    },
  },
};

export const Primary = {
  args: {
    tip: 'This is a tooltip',
    tailPosition: 'bottom',
  },
};
