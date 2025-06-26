<script context="module" lang="ts">
  import { ColorSwatch } from "$lib/index.js";
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import type { Meta } from "@storybook/svelte";

  export const meta: Meta = {
    title: "input/Color Swatch",
    component: ColorSwatch,
    args: {
      color: "#000000",
      width: 250,
      editable: false,
    },
    argTypes: {
      color: {
        control: "color",
        description: "Color to pick",
      },
      width: {
        control: {
          type: "range",
          min: 100,
          max: 500,
          step: 10,
        },
        description: "Width (px) of the color swatch",
      },
    },
  };
</script>

<Template let:args>
  <ColorSwatch {...args} />
</Template>

<Story name="Default"></Story>
