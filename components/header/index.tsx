import classNames from 'classnames';
import React, { useContext, useState } from 'react';
import theme from '~theme';

interface HeaderProps {
  isLoggedIn?: boolean;
}

const Header: React.FC<HeaderProps & React.HTMLAttributes<HTMLDivElement>> = props => {
  return (
    <div {...props} className={classNames('header', props.className)}>
      <span>BROCCOLI & CO.</span>
      <style jsx>{`
        .header {
          position: fixed;
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          top: 0;
          left: 0;
          height: 90px;
          padding: 0 44px;
          box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
          z-index: ${theme.zIndex.onTop};
          background-color: ${theme.colors.white};
        }
      `}</style>
    </div>
  );
};
export default Header;
