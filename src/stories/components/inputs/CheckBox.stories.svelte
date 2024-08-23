<script context='module'>
  import { CheckBox } from "$lib/index.js";
  import { Story } from "@storybook/addon-svelte-csf";

  export const meta = {
    title: "input/CheckBox",
    component: CheckBox,
  }
</script>

<Story name="Default">
  <CheckBox></CheckBox>
</Story>