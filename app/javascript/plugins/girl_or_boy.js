  const girl_or_boy = () => {

    const girl_ans = () => {
      const second_block = document.querySelector('#second_block');
      const girl_answer = document.querySelector('.girl_answer');
      const third_block = document.querySelector('#third_block');
      second_block.classList.add("display_none");
      girl_answer.classList.remove("display_none");
      third_block.classList.remove("display_none");
      };

    const girl_btn = document.querySelector('#girl_btn');
    girl_btn.addEventListener('click', girl_ans, false);


    const boy_ans = () => {
      const second_block = document.querySelector('#second_block');
      const boy_answer = document.querySelector('.boy_answer');
      const third_block = document.querySelector('#third_block');
      second_block.classList.add("display_none");
      boy_answer.classList.remove("display_none");
      third_block.classList.remove("display_none");
      };

    const boy_btn = document.querySelector('#boy_btn');
    boy_btn.addEventListener('click', boy_ans, false);

  };





export { girl_or_boy };
