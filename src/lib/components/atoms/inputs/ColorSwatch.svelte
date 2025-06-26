<script lang="ts">
  import { P3 } from "$lib/index.js";
  import rgba from "color-rgba";
  import TextInput from "./TextInput.svelte";
  import IconButton from "../buttons/IconButton.svelte";
  import Row from "$lib/components/layout/Row.svelte";

  export let color = "#000000",
    onchange: (e: { rgb: string; alpha: string }) => void = () => {},
    width: string = "250px",
    editable = false;
  $: if (typeof width == "number") {
    width = `${width}px`;
  }
  let colorAttributes = rgba(color);
  let alpha = colorAttributes.pop() || 1;
  let alphaHex = "ff";
  $: alphaPercent = alpha * 100;
  // r << 16 | g << 8 | b
  let rgb =
    colorAttributes.length > 2
      ? colorAttributes
          .reduce((a, b, i) => a | (b << (8 * (2 - i))), 0)
          .toString(16)
          .padStart(6, "0")
      : "000000";
  let editRgb = false;
  let editAlpha = false;

  function setAlpha(value: number) {
    const alphaAsFloat = value / 100;
    alpha = Math.max(0, Math.min(1, alphaAsFloat));
    alphaHex = Math.round(alpha * 255)
      .toString(16)
      .padStart(2, "0");
    onchange({ rgb, alpha: alphaHex });
  }

  function setRgb(value: string) {
    // if user pastes hex code with # prefix, remove it
    value = value.startsWith("#") ? value.slice(1) : value;
    const valueAsNumber = parseInt(value, 16);

    // catches isNaN
    if (isNaN(valueAsNumber)) {
      rgb = "000000";
    } else {
      rgb = valueAsNumber.toString(16).padStart(6, "0");
    }
    onchange({ rgb, alpha: alphaHex });
  }

  function selectColor() {
    const colorPicker = document.createElement("input");
    colorPicker.type = "color";
    colorPicker.value = `#${rgb}`;
    colorPicker.addEventListener("change", oncolorchange);
    colorPicker.click();
  }

  function oncolorchange(this: HTMLInputElement) {
    rgb = this.value.slice(1);
    onchange({ rgb, alpha: alphaHex });
  }
</script>

<Row {width}>
  <IconButton onclick={selectColor}>
    <div class="swatch" style:background="#{rgb}">
      <div class="swatch-opacity" style:opacity={1 - alpha}></div>
    </div>
  </IconButton>
  <P3 width="5em">
    {#if editRgb}
      #
      <TextInput
        type="text"
        autofocus
        height="1.2em"
        width="4em"
        maxlength="6"
        value={rgb}
        changeonkeyup={false}
        onchange={(e) => {
          setRgb(e.currentTarget.value);
          editRgb = false;
        }}
        onblur={() => (editRgb = false)}
      />
    {:else}
      <span
        role="textbox"
        tabindex="0"
        on:click={() => {
          if (editable) editRgb = true;
        }}
        on:keydown={() => {
          if (editable) editRgb = true;
        }}
      >
        #{rgb.padStart(6, "0")}
      </span>
    {/if}
  </P3>
  <P3 width="4.5em">
    {#if editAlpha}
      <TextInput
        type="number"
        autofocus
        height="1.2em"
        width="3em"
        min="0"
        max="100"
        maxlength="3"
        value={alphaPercent}
        changeonkeyup={false}
        onchange={(e) => {
          setAlpha(e.currentTarget.valueAsNumber);
          editAlpha = false;
        }}
        onblur={() => (editAlpha = false)}
      />
    {:else}
      <span
        role="textbox"
        tabindex="0"
        on:click={() => {
          if (editable) editAlpha = true;
        }}
        on:keydown={() => {
          if (editable) editAlpha = true;
        }}
      >
        {alphaPercent}
      </span>
    {/if}
    %
  </P3>
  <slot />
</Row>

<style>
  .swatch {
    width: 24px;
    height: 24px;
    position: relative;
  }

  .swatch-opacity {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: #888888;
  }
</style>
