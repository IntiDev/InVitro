import React from 'react';
import '../styles/components/Button.styl';

const Button = props => {
  const { text, disabled, onClick } = props;

  return (
    <button
      className="Button"
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
