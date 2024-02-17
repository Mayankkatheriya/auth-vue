// src/stories/Dashboard.stories.ts
import type { Meta, Story } from '@storybook/vue3';

import Dashboard from '../components/Dashboard.vue';

const Template: Story = (_, { argTypes }) => ({
  components: { Dashboard },
  props: Object.keys(argTypes),
  template: '<Dashboard v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  // Add any necessary props here
};

export default {
  title: 'Dashboard Component',
  component: Dashboard,
  argTypes: {
    // Add argTypes if needed
  },
} as Meta;
