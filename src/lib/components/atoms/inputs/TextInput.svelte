<script lang="ts">
  export let changeonkeyup = true;
  export let type: HTMLInputElement["type"] = "text";
  export let onchange = () => {};
  export let onkeydown = () => {};
  export let onkeyup = changeonkeyup ? onchange : () => {};
</script>

<input
  {type}
  {...$$restProps}
  on:change={onchange}
  on:keydown={onkeydown}
  on:keyup={onkeyup}
/>

<style>
  /* WARN: Unused selector */
  p {
    font-size: 14px;
    font-weight: 400;
    width: 328px;
    margin: 0;
    margin-top: 17px;
  }

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
