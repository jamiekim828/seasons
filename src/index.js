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

    // state
    // this is the only time we do direct assignment
    // to this.state
    // we don't know yet so default the value as null
    this.state = { lat: null, errorMessage: '' };

    // setState
    window.navigator.geolocation.getCurrentPosition(
      (GeolocationPosition) => {
        this.setState({ lat: GeolocationPosition.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  // React says we have to define render!!
  render() {
    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

// SeasonDisplay will show different text/icons based on props

ReactDOM.render(<App />, document.querySelector('#root'));
