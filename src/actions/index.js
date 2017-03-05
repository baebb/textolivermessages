import axios from 'axios';

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const GET_MESSAGES = 'GET_MESSAGES';

const ENDPOINT_URL = 'http://odazler.com';

export function sendMessage(props) {
  const request = axios({
    method:'POST',
    url: `/send/`,
    data: {
      message: props.message,
    }
  });
  
  return {
    type: SEND_MESSAGE,
    payload: request
  }
}

export function getMessages() {
  const request = axios.get(`${ENDPOINT_URL}/api/messagejson`);
  
  return {
    type: GET_MESSAGES,
    payload: request
  }
}