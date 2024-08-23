<script>
  export let variant = 'accept'; //accept, cancel, option
  export let disabled = false;
  export let onClick = ()=>{};
  $: isDisabled = disabled ? 'disabled' : variant;
</script>

<button class={['button', isDisabled].join(' ')} disabled={disabled} on:click={onClick} {...$$restProps}>
  <slot />
</button>

<style>
  .button{
    box-sizing: border-box;
    padding: 12px 28px;
    border-radius: var(--borderRadius);
    transition: all 0.3s ease 0s;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
  }

  /* VARIANTS */

  /* Accept */
  .accept{
    background-color: var(--accentGreen);
  }
  .accept:hover{
    background-color: var(--bgHover);
  }
  .accept:active{
    background-color: var(--colorPrimary);
    border: 1px solid var(--textMain);
  }
  /* Cancel */

  .cancel{
    background-color: var(--accentRed);
  }
  .cancel:hover{
    background-color: var(--bgHover);
  }
  .cancel:active{
    background-color: var(--colorSecondary);
    border: 1px solid var(--textMain);
  }

  /* Option */

  .option{
    background-color: var(--bgHover);
  }
  .option:hover{
    background-color: var(--bgTertiary);
    border: 1px solid var(--bgSecondary);;
  }
  .option:active{
    background-color: var(--accentOrange);
    border: 1px solid var(--textMain);
  }

  /*Disabled*/
  .disabled{
    background-color: var(--bgSecondary);
    color: var(--textDim);
  }
</style>