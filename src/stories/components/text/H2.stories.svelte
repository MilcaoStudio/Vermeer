<script context="module">
    import { H2 } from "$lib/index.js";
    import { Story, Template} from "@storybook/addon-svelte-csf";
    export const meta = {
        title: "text/H2",
        component: H2,
    }
</script>



<Template let:args>
    <H2 {...args}>
      {args.content}
    </H2>
</Template>
  
<Story name="textDim" args={{color:"var(--textDim)", content: "Johannes Vermeer was a Dutch painter"}}></Story>
<Story name="textMain" args={{color: "var(--textMain)", content: "Johannes Vermeer was a Dutch painter"}}></Story>
<Story name="blueAccent" args={{color: "var(--colorSecondary)", content: "Johannes Vermeer was a Dutch painter"}}></Story>
  