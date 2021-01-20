import HelloWorld from "./HelloWorld.vue";

export default {
  title: "Vue/HelloWorld",
  component: HelloWorld,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HelloWorld },
  template: '<hello-world v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {};
