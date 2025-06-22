<script context='module' lang="ts">
  import ColorSwatch from "$lib/components/atoms/inputs/ColorSwatch.svelte";
    import { LinearGradient } from "$lib/index.js";
    import { Story, Template } from "@storybook/addon-svelte-csf";
  import type { Meta } from "@storybook/svelte";
  
    export const meta: Meta = {
      title: "input/Linear Gradient",
      component: LinearGradient,
      subcomponents: { ColorSwatch},
      args: {
        angle: 90,
        width: 300,
        stops: ["black", "white"],
      },
      argTypes: {
        angle: {
          control: {
            type: "range",
            max: 360,
          }
        },
        width: {
          control: {
            type: "range",
            min: 100,
            max: 500,
            step: 10,
          },
        }
      }
    }
  </script>
  
  <Template let:args>
    <LinearGradient {...args} let:background>
      <div class="preview" style:width="{args.width}px" style:background></div>
    </LinearGradient>
  </Template>
  
  <Story name="Default"></Story>

  <Story name="Four Colors" args={{stops: ["#000000", "#ff0000", "#ffff00", "#00ffff"]}}></Story>

  <style>
    .preview {
        margin-top: 20px;
        min-width: 260px;
        height: 20px;
        margin-bottom: 1em;
    }
  </style>