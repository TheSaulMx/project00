import axios from 'axios';
// const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function userLogIn(username: string, password: string) {
  try {
    const response = await axios.post('https://dummyjson.com/auth/login', {
      username: username,
      password: password,
      expiresInMins: 30, // optional, defaults to 60
    });
    if (response.status === 200) {
      return response;
    }
    return null;
  } catch (error) {
    throw new Error(error as string);
  }
}
