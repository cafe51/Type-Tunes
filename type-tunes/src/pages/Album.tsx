import React from 'react';


class Album extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div data-testid="page-album">
        Album
      </div>
    );
  }
}

export default Album;
