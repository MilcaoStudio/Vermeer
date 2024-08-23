<script>
    export let hasBackground = false;
    export let isSmall = false;
    export let onclick = ()=>{};
    export let onkeydown = ()=>{};
    $: mode = hasBackground ? 'background' : 'transparent';
    $: size = isSmall ? 'small' : 'regular';
</script>


<input type="checkbox" 
               id="switch" 
               class="checkbox" />
               
        <label for="switch" 
               class="toggle">

        </label>



<style>


        h1 {
            color: green;
        }
              
        /* toggle in label designing */
        .toggle {
            position : relative ;
            display : inline-block;
            width : 72px;
            height : 28px;
            background-color: var(--bgMain);
            border-radius: 30px;
            border: 1px solid var(--textDim);
            
        }
              
        /* Sphere */
        .toggle:after {
            content: '';
            position: absolute;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background-color: gray;
            top: 2px; 
            left: 2px;
            transition:  all ease 0.45s;
            
        }
              
        /* Toggle text */
        p {
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
        }
              
        /* Checkbox checked effect */
        .checkbox:checked + .toggle::after {
            left : 44px; 
            background-color: var(--accentOrange);
        }
              
        /* Checkbox checked toggle label bg color */
        .checkbox:checked + .toggle {
            background-color: var(--colorSecondary);
        }
              
        /* Checkbox vanished */
        .checkbox { 
            display : none;
        }
        
    
    .IconButton{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: var(--borderRadius--iner);
        transition: all 0.15s ease 0s;
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
