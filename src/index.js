import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

// App : has code to determine location + month

// App Challenges
// -Need to get the users physical location
// (Geolocation API)
// https://developer.mozilla.org/en-US/docs/Web/API/geolocation_API
// -Need to determine the current month
// -Need to change text and styling based on location + month

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   // state
  //   // this is the only time we do direct assignment
  //   // to this.state
  //   // we don't know yet so default the value as null

  //   this.state = { lat: null, errorMessage: '' };

  // }

  //remove constructor and refactoring
  //this is easier to read
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (GeolocationPosition) =>
        this.setState({ lat: GeolocationPosition.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }

  // React says we have to define render!!
  render() {
    // 1. have latitude , no errorMessage -> show latitude
    // 2. no latitude , have errorMessage -> show error
    // 3. no latitude , no errorMessage -> show "loading"
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      // instead of : return <div>Latitude: {this.state.lat}</div>;
      return <SeasonDisplay lat={this.state.lat} />;
    }

    // really no need to put another if statement here
    // checked two ifs above
    // and any other case just return "Loading!"
    return <div>Loading!</div>;
  }
}

// SeasonDisplay will show different text/icons based on props

ReactDOM.render(<App />, document.querySelector('#root'));
