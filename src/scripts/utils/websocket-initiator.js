/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-underscore-dangle */

import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },
 // eslint-disable-next-line no-trailing-spaces
 
  _onMessageHandler(message) {
    const movie = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: `${movie.title} is on cinema!`,
      options: {
        body: movie.overview,
        image: `${CONFIG.BASE_IMAGE_URL + movie.poster_path}`,
      },
    });
  },
};
 // eslint-disable-next-line indent
 // eslint-disable-next-line no-trailing-spaces
 
// eslint-disable-next-line eol-last
export default WebSocketInitiator;