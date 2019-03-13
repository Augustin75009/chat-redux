export default function (state = null, action) {
  // debugger
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case 'SET_MESSAGES':
      return action.payload.messages;
    case 'SUBMIT_MESSAGE': {
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
      // return state;
    }
    default:
      return state;
  }
}
