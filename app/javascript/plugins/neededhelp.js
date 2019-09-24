  const help_click = () => {

    const display_fifth_block = () => {
      const fifth_block = document.querySelector('#fifth_block');
      const fourth_block = document.querySelector('#fourth_block');
      const swag_answer = document.querySelector('#swag_answer');
      const notswag_answer = document.querySelector('#notswag_answer');
      fifth_block.classList.remove("display_none");
      fourth_block.classList.add("display_none");
      swag_answer.classList.add("display_none");
      notswag_answer.classList.add("display_none");
      };

    const click_help = document.querySelector('#click-help');
    click_help.addEventListener('click', display_fifth_block, false);
  };


export { help_click };
