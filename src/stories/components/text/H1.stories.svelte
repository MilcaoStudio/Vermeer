<script context="module">
    import { H1 } from "$lib/index.js";
    import { Story } from "@storybook/addon-svelte-csf";

  export const meta = {
    title: "Text/H1",
    component: H1,
  }
</script>

<Story name="Default">
  <H1>Johannes Vermeer was a Dutch painter</H1>
</Story>