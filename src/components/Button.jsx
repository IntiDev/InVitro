import React from 'react';
import '../styles/components/Button.styl';

const Button = props => {
  const { text, disabled, onClick, warningBtn, cancelBtn, inputButton } = props;

  return (
    <button
      className={`Button
          ${warningBtn ? 'warningBtn' : ''}
          ${cancelBtn ? 'cancelBtn' : ''} 
        `}
      onClick={onClick}
      disabled={disabled}
      // eslint-disable-next-line react/button-has-type
      type={inputButton ? 'submit' : 'button'}
    >
      {text}
    </button>
  );
};

export default Button;
