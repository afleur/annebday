  const baby_click = () => {

    const display_clue_one = () => {
      const fifth_block = document.querySelector('#fifth_block');
      const clue_one = document.querySelector('#clue-one');
      fifth_block.classList.add("display_none");
      clue_one.classList.remove("display_none");
      };

    const click_baby = document.querySelector('#click-baby');
    click_baby.addEventListener('click', display_clue_one, false);
  };


export { baby_click };
