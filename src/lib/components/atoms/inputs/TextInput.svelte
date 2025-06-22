<script lang="ts">
  import type { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler } from "svelte/elements";

  export let changeonkeyup = true;
  export let type: HTMLInputElement["type"] = "text";
  export let width = "100%";
  export let height = "32px";
  export let borderRadius = "3px";
  export let onchange: ChangeEventHandler<HTMLInputElement> = () => {};
  export let onkeydown: KeyboardEventHandler<HTMLInputElement> = () => {};
  export let onkeyup: KeyboardEventHandler<HTMLInputElement> = changeonkeyup ? onchange : () => {};
  export let onblur: FocusEventHandler<HTMLInputElement> = () => {};
  export let onfocus: FocusEventHandler<HTMLInputElement> = () => {};
</script>

<input
  {type}
  {...$$restProps}
  style:width
  style:height
  style:border-radius={borderRadius}
  on:change={onchange}
  on:keydown={onkeydown}
  on:keyup={onkeyup}
  on:blur={onblur}
  on:focus={onfocus}
/>

<style>

  input {
    font-size: 14px;
    font-family: inherit;
    background-color: var(--bgHighlight);
    color: var(--textMain);
    margin: 0;
    border: none;
    padding: 0;
  }
</style>
