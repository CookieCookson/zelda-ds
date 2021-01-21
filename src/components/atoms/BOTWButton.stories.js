import BOTWButton from "./BOTWButton.vue";

export default {
  title: "BOTW/Button",
  component: BOTWButton,
};

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BOTWButton },
  template:
    '<BOTWButton @onClick="onClick" v-bind="$props">Button</BOTWButton>',
});

export const Default = Template.bind({});
