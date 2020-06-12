import Head from 'next/head';
import React from 'react';
import Footer from '~components/footer';
import Header from '~components/header';
import theme from '~theme';

const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>shirly's demo</title>
      </Head>
      <Header />
      <div className="content">{children}</div>
      <Footer />
      <style jsx global>
        {`
          @font-face {
            font-family: 'lato';
            src: url('/static/fonts/lato-bold-webfont.woff2') format('woff2'),
              url('/static/fonts/lato-bold-webfont.woff') format('woff');
            font-weight: bold;
            font-style: normal;
          }
          @font-face {
            font-family: 'lato';
            src: url('/static/fonts/lato-regular-webfont.woff2') format('woff2'),
              url('/static/fonts/lato-regular-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }
          html {
            * {
              box-sizing: border-box;
              &:before,
              &:after {
                box-sizing: border-box;
              }
            }
            font-family: ${theme.fontTypes.fontLato};
            color: ${theme.colors.grey4c};
          }
          body {
            margin: 0;
            -webkit-tap-highlight-color: transparent !important;
          }
          input {
            -webkit-appearance: none;
            box-shadow: none !important;
          }
          @media screen and (-webkit-min-device-pixel-ratio: 0) and (max-device-width: 1024px) {
            select,
            textarea,
            input {
              font-size: 16px !important;
            }
          }
          p {
            margin: 0;
          }
          ul,
          li {
            margin: 0;
            padding: 0;
            list-style: none;
          }
          .layout {
            position: relative;
            min-height: 100vh;
          }
          .content {
            padding-top: 90px;
            height: calc(100vh - 90px);
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
