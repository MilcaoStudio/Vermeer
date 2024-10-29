<script context="module">
import { Modal , TextInput } from "$lib/index.js";
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
    <TextInput >

    </TextInput>
  </Modal>
</Template>


<Story name="Empty">
  <Modal open />
</Story>

<Story name="Testing" >
  
  <Modal open>
    <span slot="title">Coquito</span>
    <p class="serverName">Server name</p>
    <div slot="content">
      <TextInput >

      </TextInput>
      <TextInput >
  
      </TextInput>
    </div>
    
  </Modal>
</Story>

<Story name="Create Server" args={{open: true, title: "Create a server", description: "When you create a server, you are accepting our terms of server and guidelines for moderation"}} ></Story>

<Story name="Create ser" args={{open: true, title: "Create a ", description: "When you create a server, you are accepting our terms of server and guidelines for moderation"}} >
  
  <Modal open>
    <span slot="title">Coquito</span>
    <p class="serverName">Server name</p>
    <div slot="content">
      {args.description}
      <TextInput >

      </TextInput>
      <TextInput >
  
      </TextInput>
    </div>
    
  </Modal>

</Story>

<style>
  .serverName {
    font-size: 16px;
    color: var(--textMain);
    margin: 0;
    margin-top: 17px;
    font-weight: 400;
  }

</style>