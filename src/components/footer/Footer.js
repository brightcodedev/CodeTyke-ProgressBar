import React from 'react';

import './Styles.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <small className="footer__reserved">
          Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </small>
        <small className="footer__copyright">&copy; Codetyke 2020</small>
        <small className="footer__reserved">All rights reserved</small>
        <small className="footer__slogan">Get ready to start coding!</small>
      </div>
    </div>
  )
}

export default Footer;
