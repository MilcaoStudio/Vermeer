<script context="module">
  import { H2 } from "$lib/index.js";
  import { Story, Template } from "@storybook/addon-svelte-csf";
  export const meta = {
    title: "text/H2",
    component: H2,
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
  <H2 {...args}>
    {args.content}
  </H2>
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
