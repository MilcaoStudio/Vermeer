<script lang="ts">
  import type { ContextAction } from "$lib/typings.d.ts";
  import Item from "./ContextMenuItem.svelte";
  export let actions: ContextAction[] = [];
  export let background = "var(--bgHighlight)";
</script>

<div style:--bg={background} {...$$restProps}>
  {#each actions as action (action.id)}
    <Item onclick={action.onclick} irreversible={action.irreversible}
      >{action.label}</Item
    >
  {/each}
</div>

<style>
  div {
    width: max-content;
    min-width: 150px;
    padding: var(--padding-m);
    background: var(--bg);
    display: flex;
    flex-direction: column;
    gap: var(--padding-m);
    border-radius: var(--border-radius-xs);
  }
</style>
