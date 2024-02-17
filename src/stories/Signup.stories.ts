// src/stories/Signup.stories.ts
import type { Meta, Story } from '@storybook/vue3';

import Signup from '../components/Signup.vue';

const Template: Story = (_, { argTypes }) => ({
  components: { Signup },
  props: Object.keys(argTypes),
  template: '<Signup v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  // Add any necessary props here
};

export default {
  title: 'Signup Component',
  component: Signup,
  argTypes: {
    // Add argTypes if needed
  },
} as Meta;
