import React from 'react';
import PropTypes from 'prop-types';

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const DisplayChildClass = 'p-2 row  rounded';
    const { literal, themeColor: { bgDisplay } } = this.props;
    const styleDisplay = {
      backgroundColor: bgDisplay,
      fontSize: 25,
    };
    return (
      <div id="display" style={styleDisplay} className={DisplayChildClass}>
        <h1 className="text-end">{literal}</h1>
      </div>
    );
  }
}

Display.propTypes = {
  literal: PropTypes.string.isRequired,
  themeColor: PropTypes.objectOf(PropTypes.string).isRequired,
};
