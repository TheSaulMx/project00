import axios from 'axios';
// const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchData = async (url: string) => {
  const response = await axios.get(url);
  if (response.status === 200) {
    // console.log(response.data);
    return response;
  }
};
