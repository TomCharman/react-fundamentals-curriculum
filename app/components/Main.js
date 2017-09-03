import React from 'react';
import Header from './Header';
import LocationChooser from './LocationChooser';

class Main extends React.Component {

  render() {
    return (
      <div>
        <Header title='Clever Title' />
        <div className='mainContent'>
          <h1>Enter a City and State</h1>
          <LocationChooser />
        </div>
      </div>
    )
  }
}

export default Main;