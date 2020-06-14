import React from 'react';
import theme from '~theme';
import classNames from 'classnames';

const Loading = React.forwardRef<any, React.AllHTMLAttributes<HTMLDivElement>>(
  ({ className }, ref) => {
    return (
      <div ref={ref} className={classNames('loading-dots', className)}>
        <span className="dot one"></span>
        <span className="dot two"></span>
        <span className="dot three"></span>
        <style jsx>
          {`
            .loading-dots {
              display: inline-block;
              text-align: center;
              height: 14px;
              z-index: 5;

              .dot {
                display: inline-block;
                position: relative;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                margin: 2px;
                opacity: 0;
                background: ${theme.colors.grey4c};
                animation: showHideDot 2.5s ease-in-out infinite;

                &.one {
                  animation-delay: 0.2s;
                }
                &.two {
                  animation-delay: 0.4s;
                }
                &.three {
                  animation-delay: 0.6s;
                }
              }
            }

            @keyframes showHideDot {
              0% {
                opacity: 0;
              }
              50% {
                opacity: 1;
              }
              60% {
                opacity: 1;
              }
              100% {
                opacity: 0;
              }
            }
          `}
        </style>
      </div>
    );
  }
);

export default Loading;
