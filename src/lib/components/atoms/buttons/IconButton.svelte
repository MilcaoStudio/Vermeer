<script>
    export let hasBackground = false;
    export let isSmall = false;
    export let onclick = ()=>{};
    export let onkeydown = ()=>{};
    $: mode = hasBackground ? 'background' : 'transparent';
    $: size = isSmall ? 'small' : 'regular';
</script>

<button tabindex="0" class={["IconButton",mode, size].join(' ')} {...$$restProps} on:click={onclick} on:keydown={onkeydown}>
    <slot />
</button>


<style>
    .IconButton{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: var(--borderRadius--iner);
        transition: all 0.3s ease 0s;
        padding: 0px;
        border: unset;
    }

    .background{
        background: var(--bgMain);
    }
    .background:hover{
        background: var(--bgHover);
    }
    .IconButton:hover :global( svg ){
        color: var(--textMain);
    }
    .background:active{
        background: var(--colorPrimary);
    }
    .IconButton:active :global( svg ){
        color: var(--textMain);
    }
    :global(svg){
        color: var(--textDim);
    }

    .transparent{
        background: transparent;
    }
    .transparent:active :global(svg){
        color: var(--colorPrimary);
    }

    /* SIZES */

    .regular{
        width: 32px;
        height: 32px;
    }
    .regular :global(svg) {
        width: 28px;
        height: 28px;
    }
    .small{
        width: 22px;
        height: 22px;
    }

    .small :global(svg){
        width: 22px;
        height: 22px;
    }

</style>
