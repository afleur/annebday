const audiobday = () => {

  const play = () => {
    const audio_play = document.querySelector('#audio-play');
    audio_play.play();
 };

  const audiobutton = document.querySelector('.audioButton');
  audiobutton.addEventListener('click', play, false )
};

export { audiobday };
