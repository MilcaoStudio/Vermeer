<script context='module'>
  import { ChannelButton } from '$lib/index.js';
  import { Story , Template } from '@storybook/addon-svelte-csf';

  export const meta = {
    title: "Buttons/ChannelButton",
    component: ChannelButton,
  }
</script>

<Template let:args>
  <ChannelButton {...args}>
    {args.content}
  </ChannelButton>
</Template>

<Story name="Default" args={{variant: "default", content: "Explore Channels"}}></Story>
<Story name="Active" args={{variant: "active", content: "Explore Channels"}}></Story>