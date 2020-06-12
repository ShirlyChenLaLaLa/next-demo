import React from 'react';
import classnames from 'classnames';
import { useField } from 'formik';
import theme from '~theme';

interface InputProps {
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
  className?: string;
  error?: string;
  inputClassName?: string;
  labelClassName?: string;
  errorComponent?: React.ReactNode;
}

const Input = React.forwardRef<any, InputProps & React.InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    const {
      label,
      name,
      className,
      inputClassName,
      labelClassName,
      errorComponent,
      ...others
    } = props;
    const [field, meta] = useField(name);
    return (
      <div className={classnames('root', className)}>
        <div className="label-container">
          {label && (
            <label className={classnames('label', labelClassName)} htmlFor={name}>
              {label}
            </label>
          )}
        </div>
        <div className="input-container">
          <input
            className={classnames(
              'input',
              { 'input-error': meta.touched && meta.error },
              inputClassName
            )}
            ref={ref}
            {...others}
            {...field}
          />
        </div>
        {meta.touched && meta.error ? (
          <span className="input-text-error">{errorComponent || meta.error}</span>
        ) : null}
        <style jsx>{`
          .label-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .label {
            font-size: 14px;
            line-height: 24px;
            color: ${theme.colors.grey4c};
            font-weight: ${theme.fontWeight.semiBold};
          }
          .input-container {
            position: relative;
          }
          .input {
            margin-top: 5px;
            margin-bottom: 4px;
            width: 100%;
            padding: 12px;
            font-size: 14px;
            line-height: 24px;
            border-radius: 2px;
            color: ${theme.colors.grey4c};
            outline: none;
            border: 1px solid ${theme.colors.outline};
            background: none !important;

            &:hover {
              border-color: ${theme.colors.greyText};
            }

            &:focus {
              border-color: ${theme.colors.grey4c};
            }

            &::placeholder {
              color: ${theme.colors.greyText};
            }

            &.input-error {
              border-color: ${theme.colors.red};
            }
          }
          .input-text-error {
            font-size: 12px;
            color: red;
          }
        `}</style>
      </div>
    );
  }
);

export default Input;
