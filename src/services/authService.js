export async function fakeLogin(username, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(username === 'admin' && password === 'admin');
    }, 1000);
  });
}