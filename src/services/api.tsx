import axios from 'axios';
// const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const get = async (url: string) => {
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      // console.log(response.data);
      return response;
    }
  } catch (error) {
    throw new Error(error as string);
  }
};
