<script context="module">
  import { P1 } from "$lib/index.js";
  import { Story, Template } from "@storybook/addon-svelte-csf";
  export const meta = {
    title: "text/Body Large",
    component: P1,
    args: {
      content: "Johannes Vermeer was a Dutch painter",
    },
    argTypes: {
      color: {
        control: "select",
        options: [
          "var(--textDim)",
          "var(--textMain)",
          "var(--colorSecondary)",
          "var(--colorPrimary)",
        ],
      },
    },
  };
</script>

<Template let:args>
  <P1 {...args}>
    {args.content}
  </P1>
</Template>

<Story
  name="textDim"
  args={{
    color: "var(--textDim)",
  }}
></Story>
<Story
  name="textMain"
  args={{
    color: "var(--textMain)",
  }}
></Story>
<Story
  name="blueAccent"
  args={{
    color: "var(--colorSecondary)",
  }}
></Story>
