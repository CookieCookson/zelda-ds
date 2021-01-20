import App from "./App.vue";

export default {
  title: "Vue/App",
  component: App,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { App },
  template: '<app v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {};
