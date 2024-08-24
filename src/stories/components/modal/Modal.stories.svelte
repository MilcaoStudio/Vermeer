<script context="module">
import { Modal,} from "$lib/index.js";
  import { Story, Template } from "@storybook/addon-svelte-csf";

  export const meta = {
    title: "Modals/Modal",
    component: Modal,
  };
</script>

<Template let:args>
  <Modal open={args.open}>
    <span slot="title">{args.title}</span>
    <p>{args.description}</p>
    <p class="serverName">Server name</p>
    <input type="text" />
  </Modal>
</Template>

<Story name="Empty">
  <Modal open />
</Story>

<Story name="Create Server" args={{open: true, title: "Create a server", description: "When you create a server, you are accepting our terms of server and guidelines for moderation"}} />



<style>
  p {
    font-size: 14px;
    font-weight: 400;
    width: 328px;
    margin: 0;
    margin-top: 17px;
  }

  .serverName {
    font-size: 16px;
    color: var(--textMain);
    margin: 0;
    margin-top: 17px;
    font-weight: 400;
  }

  input {
    font-size: 20px;
    background-color: var(--bgHighlight);
    color: var(--textMain);
    margin: 0;
    margin-top: 16px;
    border: none;
    height: 54px;
    border-radius: 8px;
    padding: 0;
  }
</style>