import { Meta, Story } from '@storybook/angular';

import { ButtonComponent as Button } from './button.component';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    textButton: { control: 'text' },
    index: { control: 'number' },
    onClick: {},
  },
} as Meta;

export const Primary: Story = (args) => ({
  props: args,
});

Primary.args = {
  textButton: 'Botão',
  index: 1,
};
