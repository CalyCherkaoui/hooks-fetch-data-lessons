import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchWithInput() {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(
      result => {
        console.log(result)
        setPost(result.data)
      }
    )
    .catch(
      error => {console.log(error)}
    )
  }, [id]) // we want the data to be feched once we change the input
  return (
    <div>
      <hr></hr>
      <h1><em>Fetch data with axios and with input id</em></h1>
      <input
        type="text"
        value={id}
        onChange={e => setId(e.target.value)}
      />
      <h2>{post.title}</h2>
    </div>
  )
}

export default DataFetchWithInput
