import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFechWithClickButton() {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

  const handleClick = () => {
    setIdFromButtonClick(id)
  }

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
    .then(
      result => {
        console.log(result)
        setPost(result.data)
      }
    )
    .catch(
      error => {console.log(error)}
    )
  }, [idFromButtonClick]) // we want the data to be feched once we click the button
  return (
    <div>
      <h1><em>Fetch data with axios and with input id</em></h1>
      <input
        type="text"
        value={id}
        onChange={e => setId(e.target.value)}
      />
      <button
        type="button"
        onClick={handleClick}
      >
        Fetch Post
      </button>
      <h2>{post.title}</h2>
    </div>
  )
}

export default DataFechWithClickButton
