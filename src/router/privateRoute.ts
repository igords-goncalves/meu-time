export function privateRoute(): boolean {
  const apiKey = sessionStorage.getItem('apiKey');
  const user = sessionStorage.getItem('user');

  if (!apiKey || !user) return false;

  try {
    const parsedUser = JSON.parse(user);
    return typeof parsedUser === 'object' && parsedUser !== null;
  } catch {
    return false;
  }
}
