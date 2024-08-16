<input type="checkbox" class={"checkBox"} {...$$restProps} />

<style>
  .checkBox {
    cursor: pointer;
    background-color: transparent;
    width: 24px;
    height: 24px;
    appearance: none;
    border: 3px solid #53545B;
    border-radius: 5px;
  }
  .checkBox:checked {
    background-color: #53545B;
    background-image: url('data:image/svg+xml;utf8,<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9C3.5 11 5 14 7 14C9 14 14.5 6 18 2" stroke="%23121318" stroke-width="4" stroke-linecap="round"/></svg>');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .checkBox:disabled {
    color: #292a2f;
  }
</style>
