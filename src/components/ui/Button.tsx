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
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const variants = {
    primary: 'bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] hover:from-[#0A2540] hover:to-[#1E3A8A] text-white shadow-lg hover:shadow-xl focus:ring-[#1E3A8A]',
    secondary: 'bg-[#1E3A8A] hover:bg-[#0A2540] text-white shadow focus:ring-[#1E3A8A]',
    navy: 'bg-[#0A2540] hover:bg-[#1E3A8A] text-white shadow-md focus:ring-[#0A2540]',
    outline: 'border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white focus:ring-[#1E3A8A]',
    ghost: 'text-[#1E3A8A] hover:text-[#0A2540] hover:bg-gray-100 focus:ring-gray-300',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs md:text-sm',
    md: 'px-5 py-2.5 text-sm md:text-base',
    lg: 'px-7 py-3.5 text-base md:text-lg',
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
