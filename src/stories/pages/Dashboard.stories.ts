import Dashboard from '../../components/Dashboard.vue';

export default {
  title: 'Components/Dashboard',
  component: Dashboard,
};

export const Default = () => ({
  components: { Dashboard },
  template: '<Dashboard />',
});
