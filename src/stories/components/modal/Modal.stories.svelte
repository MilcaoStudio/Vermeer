<script context="module">
  import { Modal,} from "$lib/index.js";
  import { Story, Template } from "@storybook/addon-svelte-csf";

  export const meta = {
    title: "Modals/Modal",
    component: Modal,
  };
</script>

<Template let:args>
  <Modal open={args.isOpen}></Modal>
</Template>

<Story name="openModal" args={{ isOpen: false }}></Story>
