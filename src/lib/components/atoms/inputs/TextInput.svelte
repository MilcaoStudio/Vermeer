<script lang="ts">
  import type { ChangeEventHandler, EventHandler, KeyboardEventHandler } from "svelte/elements";

  export let changeonkeyup = true;
  export let type: HTMLInputElement["type"] = "text";
  export let onchange: ChangeEventHandler<HTMLInputElement> = () => {};
  export let onkeydown: KeyboardEventHandler<HTMLInputElement> = () => {};
  export let onkeyup: KeyboardEventHandler<HTMLInputElement> = changeonkeyup ? onchange : () => {};
</script>

<input
  {type}
  {...$$restProps}
  on:change={onchange}
  on:keydown={onkeydown}
  on:keyup={onkeyup}
/>

<style>

  input {
    font-size: 16px;
    background-color: var(--bgHighlight);
    color: var(--textMain);
    margin: 0;
    margin-top: 16px;
    border: none;
    height: 32px;
    border-radius: 8px;
    padding: 0;
  }
</style>
