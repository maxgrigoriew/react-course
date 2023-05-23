import axios from 'axios';

export default class PostsService {
  static async getAll() {
    return axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(data => {
      return data.data
    })
    .catch(e => console.log(e))
  }
}