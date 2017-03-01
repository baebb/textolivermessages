import axios from 'axios';

export const SEND_MESSAGE = 'SEND_MESSAGE';

const ENDPOINT_URL = 'https://139.59.109.208:5000';

export function sendMessage(props) {
  const request = axios({
    method:'POST',
    url: `${ENDPOINT_URL}/send/`,
    data: {
      message: props.message,
    }
  });
  
  return {
    type: SEND_MESSAGE,
    payload: request
  }
}