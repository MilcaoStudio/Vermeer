<script>
  export let variant = 'accept';
  export let disabled = false;
  export let onClick = ()=>{};
</script>

<button class={['button', variant].join(' ')} disabled={disabled} on:click={onClick} {...$$restProps}>
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
  .accept:disabled{
    background-color: var(--bgSecondary);
    color: var(--textDim);
  }

  .cancel{
    background-color: var(--accentRed);
  }
  .cancel:hover{
    background-color: var(--bgHover);
  }
  .cancel:active{
    background-color: #313751;
    border: 1px solid var(--textMain);
  }
  .cancel:disabled{
    background-color: var(--bgSecondary);
    color: var(--textDim);
  }

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
</style>