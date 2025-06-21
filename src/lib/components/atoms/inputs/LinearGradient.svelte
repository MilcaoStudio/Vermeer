<script lang="ts">
    import { gradientStopRegex } from "$lib/regex.js";
    import IconButton from "../buttons/IconButton.svelte";
    import GradientStop from "./GradientStop.svelte";
    import TextInput from "./TextInput.svelte";

    type GradientStop = [string, number];
    export let stops: string[] = ["#000000", "#ffffff 50%"],
        angle = 90,
        width: string | number = 260;
    $: if (typeof width == "number") {
        width = `${width}px`;
    }

    let parsedStops: GradientStop[] = stops.map((stop, i) => {
        const match = stop.match(gradientStopRegex);
        if (!match) {
            console.warn(`Could not parse gradient stop ${stop}`);
            return [stop, i / (stops.length - 1)];
        }
        // match[1] = hex
        // match[2] = rgb(a)
        // match[3] = hsl(a)
        // match[4] = position [%]
        const color = match[1] || match[2] || match[3];
        const position = match[4]
            ? parseInt(match[4]) / 100
            : i / (stops.length - 1);
        return [color, position];
    });
    let preview: HTMLDivElement | null;
    let editAngle = false;
    $: if (preview) {
        preview.style.background = `linear-gradient(${angle}deg, ${parsedStops.map(([color, pos]) => `${color} ${Math.round(pos * 100)}%`).join(", ")})`;
        //preview.style.width = width;
    }

    function setAngle(value: number) {
        if (isNaN(value)) angle = 0;
        else if (value < 0) angle = 0;
        else if (value > 360) angle = 360;
        else angle = value;
    }
</script>

<div class="preview" bind:this={preview} style:width></div>
<div class="column" style:width>
    <div class="rowreverse">
        <div class="inlinerow">
            {#if editAngle}
                <TextInput
                    width="3em"
                    autofocus
                    type="number"
                    min="0"
                    max="360"
                    value={angle}
                    maxlength="4"
                    changeonkeyup={false}
                    onchange={(e) => {
                        setAngle(e.currentTarget.valueAsNumber);
                        editAngle = false;
                    }}
                />
                °
            {:else}
                <span
                    role="textbox"
                    tabindex="0"
                    on:click={() => (editAngle = true)}
                    on:keydown={() => (editAngle = true)}
                >
                    {angle}°
                </span>
            {/if}
        </div>
    </div>
    {#each parsedStops as [color, position], index}
        <GradientStop
            {color}
            {position}
            onchange={({ color, position }) => {
                parsedStops[index] = [color, position];
                console.log(parsedStops);
            }}
            mayRemove={parsedStops.length > 2}
            onremove={() =>
                (parsedStops = parsedStops.filter((_, i) => i != index))}
        />
    {/each}
    <IconButton hasBackground onclick={() => (parsedStops = [...parsedStops, ["#000000", 1]])}>
        <span class="action">+</span>
    </IconButton>
</div>

<style>
    .preview {
        min-width: 260px;
        height: 20px;
        margin-bottom: 1em;
    }

    .column {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .rowreverse {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
    }

    .inlinerow {
        display: inline-flex;
        flex-direction: row;
    }

    :global(.action) {
        color: var(--textDim);
        font-size: 2em;
    }
</style>
