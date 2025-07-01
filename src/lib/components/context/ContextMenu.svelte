<script lang="ts">
  import type { ContextAction } from "$lib/typings.d.ts";
  import Item from "./ContextMenuItem.svelte";
  export let actions: ContextAction[] = [];
  export let background = "var(--bgHighlight)";
</script>

<div style:--bg={background} {...$$restProps}>
  {#each actions as action (action.id)}
    <Item {...action}>{action.label}</Item>
  {/each}
</div>

<style>
  div {
    width: max-content;
    padding: var(--padding-m);
    background: var(--bg);
    display: flex;
    flex-direction: column;
    gap: var(--padding-m);
  }
</style>
