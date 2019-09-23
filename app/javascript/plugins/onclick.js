const display_first_block = () => {
    const first_block = document.querySelector('#first_block');
    const second_block = document.querySelector('#second_block');
    first_block.classList.add("display_none");
    second_block.classList.remove("display_none");
  };

  const click = () => {
    const click_btn = document.querySelector('#click-here');
    click_btn.addEventListener('click', display_first_block, false);
  };


export { display_first_block, click };
