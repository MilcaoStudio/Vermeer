<script context='module'>
    import { ColorSwatch } from "$lib/index.js";
    import { Story, Template } from "@storybook/addon-svelte-csf";
  
    export const meta = {
      title: "input/Color Swatch",
      component: ColorSwatch,
    }
  </script>

<Template let:args>
    <ColorSwatch {...args} />
</Template>

<Story name="Default"></Story>