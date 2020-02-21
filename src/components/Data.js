import React, { Component } from 'react'
import axios from 'axios'



class Data extends Component {
  constructor(props) {
    super(props);
  
    this.state = {

      post: []
      


    }
  }

  componentDidMount(){
    axios.get('https://us-central1-rest-api-1a444.cloudfunctions.net/app/api/read')
   .then(response =>{
    
      console.log(response)
      this.setState({post: response.data})
    })
    .catch(error =>{
      console.log(error)
    })
  }


deleteBook = (bookId) => {
  //alert(bookId);
  axios.delete("https://us-central1-rest-api-1a444.cloudfunctions.net/app/api/delete/" + bookId)
  .then(response =>{
    if(response.data != null){
      alert("Produktet er nu Slettet");
      this.setState({
        post: this.state.post.filter(list => list.id !== bookId)
      })
    }
  });
};

    render() {
      const {post} = this.state
      return (
        <div>
         <h1>OutPut</h1>
        {post.map(list =>
          <div key={list.id}>
           <p className="text">Product:</p> id: {list.id} <br />Name: {list.name}<br /> Price: {list.price} <br /> Description: {list.description}
            <br />
            <button onClick={this.deleteBook.bind(this, list.id)}>SLET DATA</button>
          </div>
          )}
        </div>
     
      )
    }
  }
  
  export default Data