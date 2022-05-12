const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserEmail = state => state.auth.user.email;
const getUserName = state => state.auth.user.name;

const getIsFetchingCurrentUser = state => state.auth.isGetCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsFetchingCurrentUser,
  getUserName,
};

export default authSelectors;
