export function privateRoute() {
  const user = sessionStorage.getItem('user');
  const isAuthenticated = user !== null;

  return isAuthenticated;
}
