import axios from 'axios';

export default class PostsService {
  static async getAll( limit = 10, page = 1) {
    return axios.get('https://jsonplaceholder.typicode.com/todos', {
      params: {
        _limit: limit,
        _page: page,
      }
    })
    .then(respsonse => {
      return respsonse
    })
  }
}