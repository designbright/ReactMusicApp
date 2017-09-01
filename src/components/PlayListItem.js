import React, { Component } from 'react';

export default class PlayListItem extends Component {
  constructor(props) {
    super(props);
}

  render() {
      let playListItems = this.props.songs.map( song => {
        return (
              <ul className="playListItemList" key={song._id}>
                <li>
                  <span className="listItem">User:</span> {song.userName}
                </li>
                <li>
                  <span className="listItem">Artist/Band:</span> {song.songArtist}
                </li>
                <li>
                  <span className="listItem">Title:</span> {song.songTitle}
                </li>
                <li>
                  <span className="listItem">Notes:</span> {song.songNotes}
                </li>
              </ul>
            );
          });
          return (
            <div className="playListItems">
              {playListItems}
            </div>
          );
      }
  }
