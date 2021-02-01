import BOTWCheckbox from "./BOTWCheckbox.vue";

export default {
  title: "BOTW/Checkbox",
  component: BOTWCheckbox,
};

const Template = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BOTWCheckbox },
  template: `<BOTWCheckbox></BOTWCheckbox>`,
});

export const Default = Template.bind({});
