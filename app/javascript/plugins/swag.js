  const swag_or_not = () => {

    const swag_ans = () => {
      const third_block = document.querySelector('#third_block');
      const swag_answer = document.querySelector('#swag_answer');
      const fourth_block = document.querySelector('#fourth_block');
      const fifth_block = document.querySelector('#fifth_block');
      const girl_answer = document.querySelector('.girl_answer');

      third_block.classList.add("display_none");
      girl_answer.classList.add("display_none");
      swag_answer.classList.remove("display_none");
      fourth_block.classList.remove("display_none");
      };

    const swag_btn = document.querySelector('#swag_btn');
    swag_btn.addEventListener('click', swag_ans, false);


    const notswag_ans = () => {
      const third_block = document.querySelector('#third_block');
      const notswag_answer = document.querySelector('#notswag_answer');
      const fourth_block = document.querySelector('#fourth_block');
      const girl_answer = document.querySelector('.girl_answer');
      const boy_answer = document.querySelector('.boy_answer');

      girl_answer.classList.add("display_none");
      boy_answer.classList.add("display_none");
      third_block.classList.add("display_none");
      notswag_answer.classList.remove("display_none");
      fourth_block.classList.remove("display_none");
      };

    const notswag_btn = document.querySelector('#notswag_btn');
    notswag_btn.addEventListener('click', notswag_ans, false);

  };


export { swag_or_not };
