<script context="module">
import { Modal , TextInput } from "$lib/index.js";
  import { Story, Template } from "@storybook/addon-svelte-csf";


  export const meta = {
    title: "Modals/Modal",
    component: Modal,
  };
</script>

<Template let:args>
  <Modal open={args.open} title={args.title}>
    <p>{args.description}</p>
    <p class="label">Server name</p>
    <TextInput >

    </TextInput>
  </Modal>
</Template>

<Story name="Empty">
  <Modal open />
</Story>

<Story name="Onboarding" >
  <Modal open title="Thanks for signing up!">
    <p class="label">What is your name?</p>
    <div slot="content">
      <TextInput >

      </TextInput>
    </div>
    
  </Modal>
</Story>

<Story name="Create Server" args={{open: true, title: "Create a server", description: "When you create a server, you are accepting our terms of server and guidelines for moderation"}} />


<style>
  .label {
    font-size: 16px;
    color: var(--textMain);
    margin: 0;
    margin-top: 17px;
    font-weight: 400;
  }

</style>