import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none';
  
  const variantStyles = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700',
    secondary: 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 active:bg-gray-100',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 active:bg-gray-200',
    link: 'bg-transparent text-orange-500 hover:underline p-0 h-auto focus:ring-0 focus:ring-offset-0'
  };
  
  const sizeStyles = {
    sm: 'text-xs px-3 h-8',
    md: 'text-sm px-4 h-10',
    lg: 'text-base px-5 h-12'
  };
  
  const widthStyles = fullWidth ? 'w-full' : '';
  
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;
  
  return (
    <button className={combinedStyles} {...props}>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;