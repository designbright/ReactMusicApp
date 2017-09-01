import React, { Component } from 'react';
import PlayList from './PlayList';

//In your PlayListForm component you should have a addToList function that happens when the form is submitted.

export default class PlayListForm extends Component{
  constructor(){
    super();


  this.state = {
    userName: '',
    songArtist: '',
    songTitle: '',
    songNotes: '',
  };

this.handleUsername = this.handleUsername.bind(this);
this.handleSongArtist= this.handleSongArtist.bind(this);
this.handleSongTitle = this.handleSongTitle.bind(this);
this.handleSongNotes = this.handleSongNotes.bind(this);
}

handleUsername(e) {
  this.setState({userName: e.target.value});
}
handleSongArtist(e) {
  this.setState({songArtist: e.target.value});
}
handleSongTitle(e) {
  this.setState({songTitle: e.target.value});
}
handleSongNotes(e) {
  this.setState({songNotes: e.target.value});
}

  addToList = (e) => {
      e.preventDefault();
      this.setState({
        userName: e.target.value,
        sonArtist: e.target.value,
        songTitle: e.target.value,
        songNotes: e.target.value
      });

      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    })

    .then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songArtist: '',  songTitle:'', songNotes: ''});
  }


    componentDidMount() {
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')

      .then(results => {
      return results.json();
      })

      .then(data => {
        this.setState({songs: data});
        console.log("state", this.state.songs);
      })
    }

  render() {
   return (
     <div className="playListForm">
       <div className="form_wrapper">

        <form className="form-group">

        User Name:
        <br></br>
        <input className="form_input" name="userName" type="text" placeholder="Name or Username" onChange={this.handleUsername} value={this.state.userName}/>

        <br></br>

        Artist/Band:
        <br></br>
        <input className="form_input" name="songArtist" type="text" placeholder="Artist or Band Name" onChange={this.handleSongArtist} value={this.state.songArtist}/>

        <br></br>

        Song Title:
        <br></br>
        <input className="form_input" name="songTitle" type="text" placeholder="Song Title" onChange={this.handleSongTitle} value={this.state.songTitle}/>

        <br></br>

        Notes about Song:
        <br></br>
        <input className="form_input" name="songNotes" type="textarea" placeholder="Notes" onChange={this.handleSongNotes} value={this.state.songNotes}/>

        <br></br>

        <button className="btn-primary" type="submit" value="Submit" onClick={this.addToList}>Send</button>

    </form>

  </div>
</div>
)}
}
