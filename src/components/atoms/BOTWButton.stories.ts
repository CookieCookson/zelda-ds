import BOTWButton from "./BOTWButton.vue";
import { Meta, Story } from "@storybook/vue";

export default {
  title: "BOTW/Button",
  component: BOTWButton,
} as Meta;

const Template: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BOTWButton },
  template: "<BOTWButton>Button</BOTWButton>",
});

export const Default = Template.bind({});
