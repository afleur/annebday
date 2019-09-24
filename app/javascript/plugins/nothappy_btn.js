  const nothappy_click = () => {

    const display_seventh_block = () => {
      const seventh_block = document.querySelector('#seventh-block');
      const sixth_block = document.querySelector('#sixth-block');
      seventh_block.classList.remove("display_none");
      sixth_block.classList.add("display_none");
      };

    const click_nothappy = document.querySelector('#click-nothappy');
    click_nothappy.addEventListener('click', display_seventh_block, false);
  };


export { nothappy_click };
