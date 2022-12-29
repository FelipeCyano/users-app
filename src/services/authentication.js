export function isAuthenticated() {
  return window.localStorage.getItem(import.meta.env.VITE_TOKEN_NAME) !== null;
}

export function login(token) {
  if (token === undefined) {
    return;
  }
  window.localStorage.setItem(import.meta.env.VITE_TOKEN_NAME, token);
  return true;
}

export function logout() {
  window.localStorage.removeItem(import.meta.env.VITE_TOKEN_NAME);
}
