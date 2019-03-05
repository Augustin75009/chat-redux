export default function(state = null, action) {
  switch (action.type) {
    case 'SUBMIT_MESSAGE':
      return action.payload;
    default:
      return state;
  }
}
