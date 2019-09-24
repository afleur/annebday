const pic_display_two = () => {

  const display_pic_two = () => {
    const clue_one = document.querySelector('#clue-one');
    const clue_two = document.querySelector('#clue-two');
    clue_one.classList.add("display_none");
    clue_two.classList.remove("display_none");
    };

  const click_pic_one = document.querySelector('#pic_one');
  click_pic_one.addEventListener('click', display_pic_two, false);
};


export { pic_display_two };
