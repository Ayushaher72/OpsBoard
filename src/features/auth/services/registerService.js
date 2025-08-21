export const registerService = async (username, password) => {
  // Fake service: Accepts all registrations except empty fields
  if (!username || !password) {
    throw new Error("Username and password are required");
  }
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ username });
    }, 500);
  });
};