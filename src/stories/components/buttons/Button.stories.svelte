<script context='module'>
  import { Button } from '$lib/index.js';
  import { Story , Template } from '@storybook/addon-svelte-csf';

  export const meta = {
    title: "Buttons/Button",
    component: Button,
  }
</script>

<Template let:args>
  <Button {...args}>
    {args.content}
  </Button>
</Template>

<Story name="accept" args={{variant: "accept", content: "Accept"}}></Story>
<Story name="cancel" args={{variant: "cancel", content: "Cancel"}}></Story>
<Story name="option" args={{variant: "option", content: "Option"}}></Story>
