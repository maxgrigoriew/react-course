import axios from 'axios'

class PostService {
  async getPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data
  }
}
export default new PostService()