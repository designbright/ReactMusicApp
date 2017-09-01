import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import PlayList from "./components/PlayList";
import PlayListForm from "./components/PlayListForm";


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <PlayListForm />
        <PlayList />
      </div>
    );
  }
}





















// import React, { Component } from 'react';
// import './App.css';
// // You App.js component should only have import statements for your NavBar, PlayList, and PlayListForm.
//
// import NavBar from './components/NavBar.js';
// import PlayList from './components/PlayList.js';
// import PlayListForm from './components/PlayListForm.js';
// import PlayListItem from './components/PlayListItem.js';
//
//
// class App extends Component {
//   constructor(props) {
//     super(props);
//
//
//
// this.handleNameChange = this.handleNameChange.bind(this);
// this.handleFormSubmit = this.handleFormSubmit.bind(this);
// }
//
// handleNameChange(event){
//   this.setState({
//     data: event.target.data,
//     username: ''
//   });
// }
//
// handleFormSubmit(event){
//   event.preventDefault();
//       this.setState({
//         username: this.state.data,
//         data: ''
//       })
//     }
//
//
//
// render() {
//     return (
//       <div className="App">
//       <h2>Play What?!</h2>
//
//       <NavBar/>
//
//       <PlayListForm
//         handleNameChange={this.handleNameChange}
//         handleFormSubmit={this.handleFormSubmit}
//         username ={this.state.username}
//         artist={this.state.artist}
//         song={this.state.song}
//         notes={this.state.notes}
//         data={this.state.data}/>
//
//       <PlayList/>
//
//       <PlayListItem/>
//
//       </div>
//     );
//   }
// }
//
// export default App;
