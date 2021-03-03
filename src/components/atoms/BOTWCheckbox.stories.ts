import BOTWCheckbox from "./BOTWCheckbox.vue";
import { Meta, Story } from "@storybook/vue";

export default {
  title: "BOTW/Checkbox",
  component: BOTWCheckbox,
} as Meta;

const Template: Story = (_args, storyContext) => ({
  props: Object.keys(storyContext.argTypes),
  components: { BOTWCheckbox },
  template: `<BOTWCheckbox></BOTWCheckbox>`,
});

export const Default = Template.bind({});
