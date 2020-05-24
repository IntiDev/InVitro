import React from 'react';
import '../styles/components/Button.styl';

const Button = props => {
  const { text, disabled } = props;

  const handleClick = () => {
    // console.log('Click!');
  };

  return (
    <button
      className="Button"
      onClick={handleClick}
      disabled={disabled}
      type="button"
    >
      {' '}
      {text}
      {' '}
    </button>
  );
};

export default Button;
