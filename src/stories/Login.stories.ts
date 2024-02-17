// src/stories/Login.stories.ts
import type { Meta, Story } from '@storybook/vue3';

import Login from '../components/Login.vue';

const Template: Story = (_, { argTypes }) => ({
  components: { Login },
  props: Object.keys(argTypes),
  template: '<Login v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  // Provide default values for your props here
};

export default {
  title: 'Login Component',
  component: Login,
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
} as Meta;
