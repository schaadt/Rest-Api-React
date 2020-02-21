import React, { Component } from 'react'
import Data from './components/Data'
import DataTest from './components/DataTest'
import PostData from './components/PostData'
import DeleteData from './components/DeleteData'
import './App.css';
import axios from 'axios'



class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       id: '',
       name: '',
       description: '',
       price: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = e => {
    e.preventDefault()
    
    console.log(this.state)
    axios.post('https://us-central1-rest-api-1a444.cloudfunctions.net/app/api/create', this.state)
    
    .then(response =>{
    
      console.log(response)
    })
    .catch(error =>{
      console.log(error)
    })
    this.setState({id: '', name: '', description: '', price: ''})
  }

  
  render() {
    const {id, name, description, price} = this.state
    return (
      <div class="container">
        <h1>Post til API</h1>
        <form onSubmit={this.submitHandler}>
          <div><label>ID</label><br /><input type="text" name="id" value={id} onChange={this.changeHandler} /></div>
          <div><label>Name</label><br /><input type="text" name="name" value={name} onChange={this.changeHandler}/></div>
          <div><label>Description</label><br /><input type="text" name="description" value={description} onChange={this.changeHandler}/></div>
          <div><label>Pris</label><br /><input type="text" name="price" value={price} onChange={this.changeHandler}/></div>
          <br />
          <button type="submit">Send</button>
        </form>
        <DeleteData />
        <Data />
      
      </div>
    )
  }
}

export default App
