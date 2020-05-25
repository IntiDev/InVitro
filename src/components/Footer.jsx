import React from 'react';
import '../styles/components/Footer.styl';

const Footer = props => {
  const { clinicalName } = props;

  return (
    <div className="Footer">
      Copyright
      {clinicalName}
    </div>
  );
};

export default Footer;
