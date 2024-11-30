<script>
  import { Button, H2 } from "$lib/index.js";
  export let open = true;
  export let title = "Title";
  export let width = 415;
  export let height = 400;

  let sWidth = typeof width == "number" ? `${width}px` : width;
  let sHeight = typeof height == "number" ? `${height}px` : height;
</script>

{#if open}
  <div class="backdrop">
    <div style:width={sWidth} style:max-height={sHeight} class={["modal"].join(" ")} tabindex="-1" {...$$restProps}>
      <slot name="title">
        <H2 color="var(--textMain)" margin="0">{title}</H2>
      </slot>
      <slot />
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="bottomContainer">
        <i class="icon"></i>
        <div class="buttonsContainer">
          <Button variant="accept">Accept</Button>
          <Button variant="cancel">Cancel</Button>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .backdrop {
    height: 100vh;
    width: 100vw;
    background-color: #acacaccf;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
  }
  .modal {
    width: 415px;
    min-height: 196px;
    max-height: 400px;
    background-color: var(--bgHover);
    position: absolute;
    top: calc(50% - 153px);
    left: calc(50% - 207.5px);
    border-radius: 8px;
    padding: 32px 20px 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .bottomContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 21px;
  }



  .icon {
    width: 24px;
    height: 24px;
    background-color: none;
    background-image: url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_26_807)"><path d="M10 2C15.523 2 20 6.477 20 12C20.0021 14.6255 18.9715 17.1464 17.1309 19.0186C15.2902 20.8908 12.7872 21.9641 10.162 22.0066C7.53689 22.0491 5.00034 21.0576 3.1 19.246C1.19966 17.4344 0.0879885 14.9482 0.00500011 12.324L0 12L0.00399995 11.72C0.152 6.327 4.57 2 10 2ZM10 11H9L8.883 11.007C8.63995 11.0359 8.41594 11.153 8.25341 11.336C8.09088 11.519 8.00111 11.7552 8.00111 12C8.00111 12.2448 8.09088 12.481 8.25341 12.664C8.41594 12.847 8.63995 12.9641 8.883 12.993L9 13V16L9.007 16.117C9.03332 16.3402 9.13408 16.5481 9.29301 16.707C9.45194 16.8659 9.65978 16.9667 9.883 16.993L10 17H11L11.117 16.993C11.3402 16.9667 11.5481 16.8659 11.707 16.707C11.8659 16.5481 11.9667 16.3402 11.993 16.117L12 16L11.993 15.883C11.9691 15.679 11.8829 15.4873 11.7462 15.3339C11.6095 15.1806 11.4289 15.0731 11.229 15.026L11.117 15.006L11 15V12L10.993 11.883C10.9667 11.6598 10.8659 11.4519 10.707 11.293C10.5481 11.1341 10.3402 11.0333 10.117 11.007L10 11ZM10.01 8L9.883 8.007C9.63995 8.03591 9.41594 8.15296 9.25341 8.33597C9.09088 8.51897 9.00111 8.75524 9.00111 9C9.00111 9.24476 9.09088 9.48103 9.25341 9.66403C9.41594 9.84704 9.63995 9.96409 9.883 9.993L10 10L10.127 9.993C10.37 9.96409 10.5941 9.84704 10.7566 9.66403C10.9191 9.48103 11.0089 9.24476 11.0089 9C11.0089 8.75524 10.9191 8.51897 10.7566 8.33597C10.5941 8.15296 10.37 8.03591 10.127 8.007L10.01 8Z" fill="%23888AA4"/></g><defs><clipPath id="clip0_26_807"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>');
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
    &:hover {
      opacity: 80%;
    }
  }

  .buttonsContainer {
    display: flex;
    gap: 13px;
  }

  .hidden {
    display: none;
  }

  
</style>
