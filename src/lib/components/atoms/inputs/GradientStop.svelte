<script lang="ts">
  import ColorSwatch from "./ColorSwatch.svelte";
  import IconButton from "../buttons/IconButton.svelte";
  import Row from "$lib/components/layout/Row.svelte";
  import TextInput from "./TextInput.svelte";
  export let color: string,
    position: number,
    mayRemove = false,
    onremove = () => {},
    // color: #000000ff, position: 0.5
    onchange: (e: { color: string; position: number }) => void = () => {},
    editable = false;
  let editPosition = false;

  function setColor(value: string) {
    color = value;
    onchange({ color, position });
  }

  function setPosition(value: number) {
    const positionAsFloat = value / 100;
    position = Math.max(0, Math.min(1, positionAsFloat));
    onchange({ color, position });
  }
</script>

<Row gap={2}>
  {#if editPosition}
    <TextInput
      width="3em"
      autofocus
      type="number"
      min="0"
      max="100"
      value={Math.round(position * 100)}
      maxlength="3"
      changeonkeyup={false}
      onchange={(e) => {
        setPosition(e.currentTarget.valueAsNumber);
        editPosition = false;
      }}
    />
  {:else}
    <span
      role="textbox"
      class="position"
      tabindex="0"
      on:click={() => {
        if (editable) editPosition = true;
      }}
      on:keydown={() => {
        if (editable) editPosition = true;
      }}
    >
      {Math.round(position * 100)}%
    </span>
  {/if}
  <ColorSwatch
    {color}
    onchange={({ rgb, alpha }) => setColor(`#${rgb}${alpha}`)}
    {editable}
  >
    {#if mayRemove}
      <IconButton hasBackground isSmall onclick={onremove}>
        <span class="action">-</span>
      </IconButton>
    {/if}
  </ColorSwatch>
</Row>

<style>
  .position {
    width: 3em;
    text-align: right;
  }

  .action {
    color: var(--textDim);
  }
</style>
