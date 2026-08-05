import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer tracking-wider uppercase';

  const variants = {
    primary: 'bg-[#E1B341] hover:bg-[#F4C854] text-[#071429] shadow-md hover:shadow-xl focus:ring-[#E1B341]',
    secondary: 'bg-[#071429] hover:bg-[#0D2244] text-[#E1B341] border border-[#E1B341]/30 shadow focus:ring-[#071429]',
    navy: 'bg-[#071429] hover:bg-[#122F5C] text-white shadow-md focus:ring-[#071429]',
    outline: 'border-2 border-[#E1B341] text-[#E1B341] hover:bg-[#E1B341] hover:text-[#071429] focus:ring-[#E1B341]',
    ghost: 'text-[#E1B341] hover:text-[#071429] hover:bg-[#FAF6EC] focus:ring-[#E1B341]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-xs md:text-sm',
    lg: 'px-8 py-4 text-xs md:text-sm',
  };

  return (
    <button
      className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
      {...props}
    >
      {children}
    </button>
  );
}
