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

<Story name="default" args={{variant: "default", content: "Explore Channels"}}></Story>
<Story name="variant2" args={{variant: "variant2", content: "Explore Channels"}}></Story>
<Story name="variant3" args={{variant: "variant3", content: "Explore Channels"}}></Story>