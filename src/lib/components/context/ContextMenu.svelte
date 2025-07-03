<script lang="ts">
  import type { ContextAction } from "$lib/typings.d.ts";
  import Item from "./ContextMenuItem.svelte";
  export let actions: ContextAction[] = [];
  export let background = "var(--bgHighlight)";
  export let anchor: "topleft" | "topright" | "bottomleft" | "bottomright" =
    "topleft";
  export let x = 0;
  export let y = 0;
  export let minWidth = 150;
  let top: number | null = null,
    left: number | null = null;
  let width: number;
  let height: number;
  $: anchor && setPosition(width, height);

  function setPosition(width: number, height: number) {
    if (anchor.includes("left")) {
      left = x;
    } else if (anchor.includes("right")) {
      left = x - width;
    }

    if (anchor.includes("top")) {
      top = y;
    } else if (anchor.includes("bottom")) {
      top = y - height;
    }
  }
</script>

<div
  style:--bg={background}
  style:left={left && `${left}px`}
  style:top={top && `${top}px`}
  style:min-width="{+minWidth}px"
  bind:clientWidth={width}
  bind:clientHeight={height}
  {...$$restProps}
>
  {#each actions as action (action.id)}
    <Item onclick={action.onclick} irreversible={action.irreversible}
      >{action.label}</Item
    >
  {/each}
</div>

<style>
  div {
    position: fixed;
    z-index: 100;
    border: 1px solid var(--textMain);
    width: max-content;
    padding: var(--padding-m);
    background: var(--bg);
    display: flex;
    flex-direction: column;
    gap: var(--padding-m);
    border-radius: var(--border-radius-xs);
  }
</style>
