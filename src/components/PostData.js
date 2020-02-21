import React, { useState } from 'react'

function PostData() {
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  
  // Sender Til API når man trykker Send
  const submit = e => {
    e.preventDefault()
    fetch('https://us-central1-rest-api-1a444.cloudfunctions.net/app/api/create/', {
    headers: {
        'Content-Type': 'application/json'
    },  
    method: 'POST',
    body: JSON.stringify({ id, name, price, description }),
    })
  }
  return (
    <form onSubmit={submit}>
      <label htmlFor="comment">Id</label> <br />
      <input
        name="comment"
        value={id}
        onChange={e => setId(e.target.value)}
        />
      <br />
      <label htmlFor="name">Name</label> <br />
      <input
        name="comment"
        value={name}
        onChange={e => setName(e.target.value)}
        />
      <br />
      <label htmlFor="price">Price</label> <br />
      <input
        name="price"
        value={price}
        onChange={e => setPrice(e.target.value)}
       />
      <br />
      <label htmlFor="description">Description</label> <br />
      <input
        name="description"
        value={description}
        onChange={e => setDescription(e.target.value)}
       />
      <br /><br />
      <button type="submit">Send it!</button>
      <br /><br />
    </form>
  )
}

export default PostData