import React from 'react';
import '../styles/components/Button.styl';

const Button = props => {
  const { text, disabled, onClick, warningBtn, cancelBtn } = props;

  return (
    <button
      className={`Button ${warningBtn ? 'warningBtn' : ''} ${
        cancelBtn ? 'cancelBtn' : ''
      } `}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
