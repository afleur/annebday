  const found_click = () => {

    const display_queena_first_part = () => {
      const clue_three = document.querySelector('#clue-three');

      const sixth_block_text = document.querySelector('#sixth-block-text');
      clue_three.classList.add("display_none");
      sixth_block_text.classList.remove("display_none");
      };

    const display_queena_second_part = () => {
      const queena_pic = document.querySelector('#queena_pic');
      queena_pic.classList.remove("display_none");
      };

    const display_queena_third_part = () => {
    const queena_block = document.querySelector('#queena_block');
    queena_block.classList.remove("display_none");
    };

    const display_queena_last_part = () => {
    const queena_text = document.querySelector('#queena-text');
    queena_text.classList.remove("display_none");
    };



    const click_sherlock = document.querySelector('#click-sherlock');
    click_sherlock.addEventListener('click', (event) => {
      display_queena_first_part();
      setTimeout(display_queena_second_part, 3000);
      setTimeout(display_queena_third_part, 4000);
      setTimeout(display_queena_last_part, 6000);
    });
  };


export { found_click };
