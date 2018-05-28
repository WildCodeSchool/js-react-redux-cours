const activeUser = (state = null, action) => {
  switch (action.type) {
    case 'USER_SELECTED':
      return action.user;
    default:
      return state;
  }
}

export default activeUser;