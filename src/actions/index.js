export function fetchMessages(channel) {
  const url = 'https://wagon-chat.herokuapp.com';
  const promise = fetch(`${url}/${channel}/messages`).then(r => r.json());
  return {
    type: 'SET_MESSAGES',
    payload: promise
  };
}

export function submitMessage(channel, author, content) {
  // debugger
  const url = 'https://wagon-chat.herokuapp.com';
  const body = { channel, author, content };
  const promise = fetch(`${url}/${channel}/messages`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());
  return {
    type: 'SUBMIT_MESSAGE',
    payload: promise
  };
}

export function selectedChannel(channel) {
  return {
    type: 'SELECT_CHANNEL',
    payload: channel
  };
}
