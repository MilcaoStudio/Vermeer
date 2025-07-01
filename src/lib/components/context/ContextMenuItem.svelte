<script lang="ts">
  import P2 from "../atoms/text/P2.svelte";

  export let onclick: () => void;
  export let onmouseenter: () => void = () => {};
  export let irreversible = false;
  export let background: string | undefined = undefined;
  export let color = "var(--textMain)";
</script>

<button class="context-menu-item" style:--bg={background} on:click={onclick} on:mouseenter={onmouseenter} {...$$restProps}>
  <slot name="content">
    <P2 {color}><span class:danger={irreversible}><slot /></span></P2>
  </slot>
</button>

<style>
  button {
    cursor: pointer;
    padding: 4px 8px;
    border-radius: var(--border-radius-xs);
    display: flex;
    align-items: center;
    background: var(--bg, inherit);
    border: unset;
  }

  button:hover {
    background: var(--bgHover);
  }

  .danger {
    color: var(--accentRed);
  }
</style>
