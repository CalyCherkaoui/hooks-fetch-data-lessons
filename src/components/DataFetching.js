import React, {useState, useEffect} from 'react'
import axios from 'axios'

// for this exemple we use fake data from jsonplaceholder.typicode.com

function DataFetching() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(
      result => {
        console.log(result)
        setPosts(result.data)
      }
    )
    .catch(
      error => {console.log(error)}
    )
  }, []) // we want the data to be feched once
  return (
    <div>
      <hr></hr>
      <hr></hr>
      <h1><em>Fetch data with axios</em></h1>
      <br></br>
      <br></br>
      <ul>
        {
          posts.map(post => (<li key={post.id}>{post.title}</li>))
        }
      </ul>
    </div>
  )
}

export default DataFetching
