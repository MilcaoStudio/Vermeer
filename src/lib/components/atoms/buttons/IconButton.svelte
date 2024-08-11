<script>

    export let hasBackground = false;
    export let isSmall = false;

    $: mode = hasBackground ? 'background' : 'transparent';
    $: size = isSmall ? 'tiny' : 'regular';


</script>

<div class={[mode, size].join(' ')}>
    <slot>
       
    </slot>
</div>


<style>
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: var(--borderRadius--iner);
        transition: all 0.3s ease 0s;

    }

    .background{
        background: var(--bgMain);
    }
    .background:hover{
        background: var(--bgHover);
    }
    div:hover :global( svg ){
        color: var(--textMain);
    }
    .background:active{
        background: var(--colorPrimary);
    }
    div:active :global( svg ){
        color: var(--textMain);
    }
    :global(svg){
        height: 24px;
        width: 24px;
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
    .tiny{
        width: 22px;
        height: 22px;
    }
    .tiny :global(svg){
        width: 22px;
        height: 22px;
    }

</style>
