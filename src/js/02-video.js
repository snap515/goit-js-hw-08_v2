import throttle from 'lodash.throttle';

const PLAYER_CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate({ seconds }) {
  localStorage.setItem(PLAYER_CURRENT_TIME, seconds);
}

player.setCurrentTime(localStorage.getItem(PLAYER_CURRENT_TIME));
