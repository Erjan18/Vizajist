import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = '',
  ...props
}) => {
  const inputBaseStyles = 'bg-white border rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 block py-2';
  const inputPaddingStyles = leftIcon ? 'pl-10' : 'pl-4';
  const inputRightPaddingStyles = rightIcon ? 'pr-10' : 'pr-4';
  const inputErrorStyles = error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300';
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const combinedInputStyles = `${inputBaseStyles} ${inputPaddingStyles} ${inputRightPaddingStyles} ${inputErrorStyles} ${widthStyles} ${className}`;
  
  return (
    <div className={`${fullWidth ? 'w-full' : ''} space-y-1`}>
      {label && (
        <label htmlFor={props.id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {leftIcon}
          </div>
        )}
        <input className={combinedInputStyles} {...props} />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;