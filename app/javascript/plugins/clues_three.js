const pic_display_three = () => {

  const display_pic_three = () => {
    const clue_two = document.querySelector('#clue-two');
    const clue_three = document.querySelector('#clue-three');
    clue_two.classList.add("display_none");
    clue_three.classList.remove("display_none");
    };

  const click_pic_two = document.querySelector('#pic_two');
  click_pic_two.addEventListener('click', display_pic_three, false);
};


export { pic_display_three };
