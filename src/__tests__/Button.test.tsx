import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from '@/components/ui/Button';

describe('Button Component', () => {
  it('renders children correctly', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('triggers onClick callback when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Get Started</Button>);
    fireEvent.click(screen.getByText('Get Started'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
