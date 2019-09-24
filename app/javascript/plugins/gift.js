  const gift_click = () => {

    const display_gift_start = () => {
      const tadam_start = document.querySelector('#tadam_start');
      const seventh_block = document.querySelector('#seventh-block');
      tadam_start.classList.remove("display_none");
      seventh_block.classList.add("display_none");
      };

    const display_gift_tadam_one = () => {
      const tadam_one = document.querySelector('#tadam_one');
      tadam_one.classList.remove("display_none");
      };

    const display_gift_tadam_two = () => {
      const tadam_two = document.querySelector('#tadam_two');
      tadam_two.classList.remove("display_none");
      };

    const display_gift_tadam_all = () => {
      const tadam_all = document.querySelector('#tadam_all');
      tadam_all.classList.remove("display_none");
      };


    const click_gift = document.querySelector('#click-gift');
    click_gift.addEventListener('click', (event) => {
      display_gift_start();
      setTimeout(display_gift_tadam_one, 1000);
      setTimeout(display_gift_tadam_two, 1500);
      setTimeout(display_gift_tadam_all, 2000);
    });
  };


export { gift_click };
