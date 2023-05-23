import axios from 'axios';

export default class PostsService {
  static async getAll() {
    return axios.get('https://jsonplaceholder.typicode.com/todosd')
    .then(data => {
      return data.data
    })
  }
}