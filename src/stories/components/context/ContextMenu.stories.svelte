<script context="module" lang="ts">
  import { ContextMenu } from "$lib/context.js";
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import type { Meta } from "@storybook/svelte";
  import { expect, fn, userEvent, within } from "@storybook/test";

  export const meta: Meta = {
    title: "context/ContextMenu",
    component: ContextMenu,
    args: {
      x: 200,
      y: 150,
      minWidth: 150,
      anchor: "topright",
      actions: [
        {
          id: "reply",
          label: "Reply",
          onclick: fn(),
        },
        {
          id: "edit",
          label: "Edit",
          onclick: fn(),
        },
        {
          id: "delete",
          label: "Delete",
          irreversible: true,
          onclick: fn(),
        },
      ],
    },
    play: async ({ args, canvasElement }) => {
      const canvas = within(canvasElement);
      const buttons = canvas.getAllByRole("button");
      await Promise.all(buttons.map((item) => userEvent.click(item)));
      for (const action of args.actions) {
        expect(action.onclick).toBeCalled();
      }
    },
  };
</script>

<Template let:args>
  <ContextMenu {...args}></ContextMenu>
</Template>

<Story name="Default"></Story>
