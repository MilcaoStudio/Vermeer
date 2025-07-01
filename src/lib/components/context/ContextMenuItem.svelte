<script lang="ts">
  export let onclick: () => void;
  export let irreversible = false;
  export let background: string | undefined = undefined;
  export let color = "var(--textMain)";
</script>

<button
  class="context-menu-item"
  style:--bg={background}
  style:--fill={color}
  on:click={onclick}
  class:danger={irreversible}
>
  <slot />
</button>

<style>
  button {
    cursor: pointer;
    padding: 4px 8px;
    border-radius: var(--border-radius-xs);
    display: flex;
    align-items: center;
    background: var(--bg, inherit);
    color: var(--fill, inherit);
    border: unset;
  }

  button:hover {
    background: var(--bgHover);
  }

  .danger {
    color: var(--accentRed);
  }
</style>
