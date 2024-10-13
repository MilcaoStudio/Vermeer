<script context="module">
    import { P4 } from "$lib/index.js";
    import { Story, Template } from "@storybook/addon-svelte-csf";
    export const meta = {
        title: "text/Body Extra Small",
        component: P4,
    }
</script>



<Template let:args>
    <P4 {...args}>
      {args.content}
    </P4>
</Template>
  
<Story name="textDim" args={{color:"var(--textDim)", content: "Johannes Vermeer was a Dutch painter"}}></Story>
<Story name="textMain" args={{color: "var(--textMain)", content: "Johannes Vermeer was a Dutch painter"}}></Story>
<Story name="blueAccent" args={{color: "var(--colorSecondary)", content: "Johannes Vermeer was a Dutch painter"}}></Story>
  