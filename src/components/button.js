import * as React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.calculateExpression = this.calculateExpression.bind(this);
  }

  calculateExpression(e) {
    this.setState({});
    const { calculateExpression } = this.props;
    calculateExpression(e.target.getAttribute('aria-label'));
  }

  render() {
    const {
      id, category, label, themeColor,
    } = this.props;
    const buttonClass = 'btn border-light border w-100 d-3 shadow-lg';
    const columnSize = id.localeCompare('zero') === 0 ? 'col-sm-6' : 'col-sm-3';
    const {
      bgOperators, bgNumbers, textColor,
    } = themeColor;
    const setColor = () => {
      const set = {
        bgColor: bgNumbers,
        color: textColor,
      };
      if (category.localeCompare('operators') === 0) {
        set.bgColor = bgOperators;
        set.color = textColor;
      }
      return set;
    };

    const { bgColor, color } = setColor();

    const style = {
      backgroundColor: bgColor,
      color,
      fontSize: 25,
      fontWeight: 'bolder',
    };
    return (
      <div className={columnSize}>
        <button
          className={buttonClass}
          id={id}
          aria-label={label}
          type="button"
          category={category}
          style={style}
          onClick={this.calculateExpression}
          dangerouslySetInnerHTML={{
            __html: label,
          }}
        />
      </div>
    );
  }
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  themeColor: PropTypes.objectOf(PropTypes.string).isRequired,
  calculateExpression: PropTypes.func.isRequired,
};
