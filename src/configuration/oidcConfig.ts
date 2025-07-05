const oidcConfig = {
  authority: import.meta.env.VITE_KEYCLOAK_AUTHORITY_URL,
  client_id: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
  redirect_uri: import.meta.env.VITE_KEYCLOAK_REDIRECT_URI,
  scope: 'openid profile email',
  response_type: 'code',
  silent_redirect_uri: window.location.origin + "/silent-redirect.html",
  post_logout_redirect_uri: import.meta.env.VITE_KEYCLOAK_POST_LOGOUT_REDIRECT_URI,
  automaticSilentRenew: true,
  loadUserInfo: true,

  onSigninCallback: () => {
    window.history.replaceState({}, document.title, window.location.pathname);
  },
};

export default oidcConfig;