import React from 'react';
import PropTypes from 'prop-types';
import { getCurrentWeather } from '../utils/weatherApi';

class LocationChooser extends React.Component {
  static propTypes = {
    vertical: PropTypes.bool
  }

  static defaultProps = {
    vertical: true
  }

  state = {
    search: ''
  }

  handleChange = (event) => {
    const value = event.target.value;

    this.setState(() => ({ search: value }))
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    console.log(this.state.search);

    const weather = await getCurrentWeather(this.state.search);

    console.log(weather);
  }

  render(props) {
    const { vertical } = this.props;
    const { search } = this.state;

    return (
      <form className={'locationChooser ' + (vertical ? 'column' : 'row')}
        onSubmit={this.handleSubmit}>
        <input
          placeholder='St. George, Utah'
          type='text'
          value={search}
          onChange={this.handleChange}
        />
        <button
          className='button button-success'
          disabled={!search}
          type='submit'
        >Get Weather</button>
      </form>
    )
  }
}

export default LocationChooser;