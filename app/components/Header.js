import React from 'react';
import PropTypes from 'prop-types';
import LocationChooser from './LocationChooser';

class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render() {
    const { title } = this.props;

    return (
      <div className="header">
        <h1>{title}</h1>
        <LocationChooser vertical={false} />
      </div>
    )
  }
}

export default Header;