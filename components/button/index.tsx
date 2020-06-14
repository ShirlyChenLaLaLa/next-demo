import classNames from 'classnames';
import React from 'react';
import theme from '~theme';
import Loading from '~components/loading';
interface ButtonProps {
  fullWidth?: boolean;
  loading?: boolean;
  size?: 'large' | 'default' | 'small' | 'mini';
}

const Button = React.forwardRef<any, ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const { size, color, fullWidth, className, children, loading, ...otherProp } = props;

    return (
      <>
        <button
          {...otherProp}
          disabled={props.disabled || loading}
          className={classNames(
            'button',
            {
              sizeDefault: !size || size === 'default',
              sizeSmall: size === 'small',
              sizeLarge: size === 'large',
              sizeMini: size === 'mini',
              fullWidth: fullWidth,
            },
            className
          )}
          ref={ref}
        >
          {loading ? <Loading color={color} /> : <span>{children}</span>}
        </button>
        <style jsx>
          {`
            .button {
              background-color: unset;
              border: unset;
              border-radius: 4px;
              border: 1px solid ${theme.colors.grey4c};
              outline: none;
              color: ${theme.colors.grey4c};
              cursor: ${props.disabled ? 'default' : 'pointer'};

              :hover {
                background: ${theme.colors.greyEb};
              }
            }
            .fullWidth {
              width: 100%;
            }
            .sizeSmall {
              padding: 6px 16px;
            }
            .sizeDefault {
              padding: 11px 24px;
              font-size: 14px;
            }
            .sizeLarge {
              padding: 12px 40px;
              font-size: 16px;
            }
            .sizeMini {
              padding: 0px 8px;
            }
          `}
        </style>
      </>
    );
  }
);

export default Button;
