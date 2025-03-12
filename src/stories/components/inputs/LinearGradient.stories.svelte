<script context='module'>
    import { LinearGradient } from "$lib/index.js";
    import { Story, Template } from "@storybook/addon-svelte-csf";
  
    export const meta = {
      title: "input/Linear Gradient",
      component: LinearGradient,
    }
  </script>
  
  <Template let:args>
    <LinearGradient {...args} />
  </Template>
  
  <Story name="Default"></Story>

  <Story name="Four Colors" args={{stops: ["#000000", "#ff0000", "#ffff00", "#00ffff"]}}></Story>