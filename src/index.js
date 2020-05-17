import React from 'react';
import ReactDOM from 'react-dom';

// App : has code to determine location + month

// App Challenges
// -Need to get the users physical location
// (Geolocation API)
// https://developer.mozilla.org/en-US/docs/Web/API/geolocation_API
// -Need to determine the current month
// -Need to change text and styling based on location + month

class App extends React.Component {
  constructor(props) {
    super(props);

    // we don't know yet so default the value as null
    this.state = { lat: null };
  }

  // React says we have to define render!!
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (error) => console.log(error)
    );

    return <div>Latitude: </div>;
  }
}

// SeasonDisplay will show different text/icons based on props

ReactDOM.render(<App />, document.querySelector('#root'));
