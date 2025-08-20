export const loginService = async (username, password) => {
  return username === 'admin' && password === 'admin';
};