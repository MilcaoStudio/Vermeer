<script context="module">
    import { P2 } from "$lib/index.js";
    import { Story, Template } from "@storybook/addon-svelte-csf";
    export const meta = {
        title: "text/Body Medium",
        component: P2,
    }
</script>



<Template let:args>
    <P2 {...args}>
      {args.content}
    </P2>
</Template>
  
<Story name="textDim" args={{color:"var(--textDim)", content: "Johannes Vermeer was a Dutch painter"}}></Story>
<Story name="textMain" args={{color: "var(--textMain)", content: "Johannes Vermeer was a Dutch painter"}}></Story>
<Story name="blueAccent" args={{color: "var(--colorSecondary)", content: "Johannes Vermeer was a Dutch painter"}}></Story>
  