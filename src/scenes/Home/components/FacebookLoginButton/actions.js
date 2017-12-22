export const fbLoggedIn = profile => ({
  type: 'FB_LOGGED_IN',
  ...profile
});

export const fbLoggedOut = _ => ({
  type: 'FB_LOGGED_OUT'
});
