<script>
    export let disabled = false;
    export let onclick = () => {};
    export let onkeydown = () => {};
</script>

<input
    {disabled}
    class={["checkbox"].join(" ")}
    {...$$restProps}
    on:click={onclick}
    on:keydown={onkeydown}
    type="checkbox"
    id="switch"
/>
<label for="switch" class="toggle"></label>

<style>
    /* toggle in label designing */
    .toggle {
        position: relative;
        display: inline-block;
        width: 72px;
        height: 28px;
        background-color: var(--bgMain);
        border-radius: 30px;
        border: 1px solid var(--textDim);
    }

    /* Sphere */
    .toggle:after {
        content: "";
        position: absolute;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: gray;
        top: 2px;
        left: 2px;
        transition: all ease 0.35s;
    }

    .checkbox:disabled {
        background-color: var(--bgSecondary);
        color: var(--textDim);
    }

    /* Checkbox checked effect */
    .checkbox:checked + .toggle::after {
        left: 44px;
        background-color: var(--accentOrange);
    }

    /* Checkbox checked toggle label bg color */
    .checkbox:checked + .toggle {
        background-color: var(--colorSecondary);
    }

    /* Checkbox vanished */
    .checkbox {
        display: none;
    }

    /* SIZES */
</style>
