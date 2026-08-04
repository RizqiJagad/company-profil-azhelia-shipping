import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export function Card({ children, className, hoverEffect = true, ...props }: CardProps) {
  return (
    <div
      className={twMerge(
        clsx(
          'bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 transition-all duration-300',
          hoverEffect && 'hover:shadow-xl hover:-translate-y-1',
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
}
