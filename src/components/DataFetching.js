import React, {useState, useEffect} from 'react'
import axios from 'axios'

// for this exemple we use fake data from jsonplaceholder.typicode.com

function DataFetching() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(
      result => {console.log(res)}
    )
    .catch(
      error => {console.log(error)}
    )
  })
  return (
    <div>
      <ul>
        {
          posts.map(post => (<li key={post.id}>{post.title}</li>))
        }
      </ul>
    </div>
  )
}

export default DataFetching
