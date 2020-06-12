import classNames from 'classnames';
import React, { useContext, useState } from 'react';
import theme from '~theme';

interface FooterProps {
  isLoggedIn?: boolean;
}

const Footer: React.FC<FooterProps & React.HTMLAttributes<HTMLDivElement>> = props => {
  return (
    <div {...props} className={classNames('footer', props.className)}>
      <div>Made by ♡ shirly.chen </div>
      <div className="copyright">(c) 2020 Broccoli & Co. All rights reserved</div>
      <style jsx>{`
        .footer {
          position: fixed;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 90px;
          border-top: 4px solid ${theme.colors.greyCc};
          background-color: ${theme.colors.white};
        }
        .copyright {
          margin-top: 10px;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
};
export default Footer;
