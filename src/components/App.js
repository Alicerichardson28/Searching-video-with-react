import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './videoList';
import youtube from '../apis/youtube'

class App extends React.Component {
    state = {
      videos: [],
      selectedVideo: null
    };
    onTermSubmit = async term => {
      const response = await youtube.get('./search', {
        params: {
          q: term
        }
      });

      this.setState({ videos: response.data.items})
    }

    onVideoSelect = (video) => {
      console.log('Form the App', video)
    }

    render() {
        return (
          <div className="ui container">
            <SearchBar callParentSubmit={this.onTermSubmit} />
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
          </div>
        );
    }
}

export default App;