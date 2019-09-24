  const found_click = () => {

    const display_queena = () => {
      const clue_three = document.querySelector('#clue-three');
      const sixth_block = document.querySelector('#sixth-block');
      clue_three.classList.add("display_none");
      sixth_block.classList.remove("display_none");
      };

    const click_sherlock = document.querySelector('#click-sherlock');
    click_sherlock.addEventListener('click', setTimeOut(display_queena, 5000), false);
  };


export { found_click };
