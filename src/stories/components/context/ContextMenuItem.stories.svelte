<script context="module" lang="ts">
  import { ContextMenuItem } from "$lib/context.js";
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import type { Meta } from "@storybook/svelte";
  import { userEvent, within, fn, expect } from "@storybook/test";

  export const meta: Meta = {
    title: "context/MenuItem",
    component: ContextMenuItem,
    args: {
      label: "Do something",
      irreversible: false,
      background: "var(--bgHighlight)",
      onclick: fn(),
    },
    argTypes: {
      background: {
        options: [
          "var(--bgHighlight)",
          "var(--bgMain)",
          "var(--bgSecondary)",
          "var(--bgTertiary)",
        ],
      },
      onclick: {
        table: {
          disable: true,
        }
      }
    },
    play: async ({ args, canvasElement }) => {
      const canvas = within(canvasElement);
      await userEvent.click(canvas.getByRole("button"));
      expect(args.onclick).toBeCalled();
    },
  };
</script>

<Template let:args>
  <ContextMenuItem {...args}>{args.label}</ContextMenuItem>
</Template>

<Story name="Default"></Story>
<Story name="Irreversible" args={{ label: "Delete", irreversible: true }} />
