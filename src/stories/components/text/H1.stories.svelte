<script context="module">
    import { H1 } from "$lib/index.js";
    import { Story, Template } from "@storybook/addon-svelte-csf";

  export const meta = {
    title: "Text/H1",
    component: H1,
  }
</script>



<Template let:args>
  <H1 {...args}>
    {args.content}
  </H1>
</Template>

<Story name="textDim" args={{color:"var(--textDim)", content: "Johannes Vermeer was a Dutch painter"}}></Story>
<Story name="textMain" args={{color: "var(--textMain)", content: "Johannes Vermeer was a Dutch painter"}}></Story>
<Story name="blueAccent" args={{color: "var(--colorSecondary)", content: "Johannes Vermeer was a Dutch painter"}}></Story>
