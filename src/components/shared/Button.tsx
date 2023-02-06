import classNames from 'classnames';
import React from 'react';

type Props = {
  className?: string;
  type?: 'submit' | 'button';
  outline?: boolean;
  children: string | React.ReactNode | React.ReactNode[];
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ className, type = 'button', outline = false, children, onClick }: Props) => {
  return (
    <button
      className={classNames(
        className,
        'text-xs sm:text-sm rounded-full hover:transition-colors duration-300',
        outline
          ? 'border border-primary-500 hover:bg-primary-500 text-primary-500 hover:text-white focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500'
          : 'bg-primary-500 hover:bg-primary-600 text-white  hover:text-primary-900 focus:outline focus:outline-2 focus:outline-primary-500 outline-offset-2'
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
