<script context="module">
  import { H1 } from "$lib";
  export const meta = {
    title: "Text/H1",
    component: H1,
  }
</script>

<script>
  import { Story } from "@storybook/addon-svelte-csf";
</script>

<Story name="Default">
  <H1>Johannes Vermeer was a Dutch painter</H1>
</Story>