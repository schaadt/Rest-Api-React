import React from 'react';
import axios from 'axios';

export default class deleteData extends React.Component {
  state = {
    id: '',
  }

  changeFunc = event => {
    this.setState({ id: event.target.value });
  }

  submitFunc = event => {
    event.preventDefault();

    axios.delete(`https://us-central1-rest-api-1a444.cloudfunctions.net/app/api/delete/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitFunc}>
          <label>
            Person ID:
            <input type="text" name="id" onChange={this.changeFunc} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}