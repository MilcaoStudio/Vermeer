<script context="module">
    import { P3 } from "$lib/index.js";
    import { Story, Template } from "@storybook/addon-svelte-csf";
    export const meta = {
        title: "text/Body Small",
        component: P3,
    }
</script>



<Template let:args>
    <P3 {...args}>
      {args.content}
    </P3>
</Template>
  
<Story name="textDim" args={{color:"var(--textDim)", content: "Johannes Vermeer was a Dutch painter"}}></Story>
<Story name="textMain" args={{color: "var(--textMain)", content: "Johannes Vermeer was a Dutch painter"}}></Story>
<Story name="blueAccent" args={{color: "var(--colorSecondary)", content: "Johannes Vermeer was a Dutch painter"}}></Story>
  