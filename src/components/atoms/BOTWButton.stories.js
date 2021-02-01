import BOTWButton from "./BOTWButton.vue";

export default {
  title: "BOTW/Button",
  component: BOTWButton,
};

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BOTWButton },
  template: "<BOTWButton>Button</BOTWButton>",
});

export const Default = Template.bind({});
