import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
  }, 1000)
);
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
