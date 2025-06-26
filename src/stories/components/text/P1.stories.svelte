<script context="module">
  import { P1 } from "$lib/index.js";
  import { Story, Template } from "@storybook/addon-svelte-csf";
  export const meta = {
    title: "text/Body Large",
    component: P1,
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
    content: "Johannes Vermeer was a Dutch painter",
  }}
></Story>
<Story
  name="textMain"
  args={{
    color: "var(--textMain)",
    content: "Johannes Vermeer was a Dutch painter",
  }}
></Story>
<Story
  name="blueAccent"
  args={{
    color: "var(--colorSecondary)",
    content: "Johannes Vermeer was a Dutch painter",
  }}
></Story>
