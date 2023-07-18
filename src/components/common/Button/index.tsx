import { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  disabled?: boolean;
  children: ReactNode;
  shape?: 'square' | 'rounded';
  variant?: 'primary' | 'secondary' | 'dark';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  variant = 'primary',
  shape = 'square',
  disabled = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${VARIANTS_STYLE[variant]} ${SHAPE_STYLE[shape]} h-12 w-full disabled:bg-neutral-300`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

const VARIANTS_STYLE = {
  primary:
    'enabled:bg-blue-600 text-white enabled:hover:bg-blue-700 enabled:active:bg-blue-800',
  secondary:
    'enabled:bg-red-600 text-white enabled:hover:bg-red-700 enabled:active:bg-red-800',
  dark: 'enabled:bg-black text-white enabled:hover:bg-slate-800 enabled:active:bg-slate-900',
};

const SHAPE_STYLE = {
  square: '',
  rounded: 'rounded-xl',
};

export default Button;
