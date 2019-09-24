  const message_click = () => {

    const display_message = () => {
      const message_block = document.querySelector('#message-block');
      const gift_block = document.querySelector('#gift-block');
      message_block.classList.remove("display_none");
      gift_block.classList.add("display_none");
      };

    const click_msg = document.querySelector('#click-msg');
    click_msg.addEventListener('click', display_message, false);
  };


export { message_click };
