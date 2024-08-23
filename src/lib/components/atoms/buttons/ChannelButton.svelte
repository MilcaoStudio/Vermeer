<script>
  export let variant = "default"; //default, variant2, variant3
  export let onClick = () => {};

</script>

<button class={["channelButton" ,variant].join(" ")} {...$$restProps} on:click={onClick}> <i class="icon"></i>
  <slot></slot>
</button>

<style>

  
  .channelButton{
    height: 28px;
    padding: var(--padding-s) 42px var(--padding-s) var(--padding-xl);
    box-sizing: border-box;
    border-radius: var(--borderRadius);
    font-weight: 300;
    font-size: 12px;
    border: none;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .icon {
    width: 18px;
    height: 18px;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none"><g clip-path="url(%23clip0_18_31)"><path d="M3.75 6.75H14.25" stroke="%23888AA4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 11.25H14.25" stroke="%23888AA4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.25 3L5.25 15" stroke="%23888AA4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.75 3L9.75 15" stroke="%23888AA4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_18_31"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  /*VARIANTS*/
  .default{
    background-color: transparent;
    color: var(--textDim);
  }

  .variant2{
    background-color: var(--bgHover);
    color: var(--textDim);
  }

  .variant3{
    background-color: #313751;
    color: var(--textMain);
  }
</style>
