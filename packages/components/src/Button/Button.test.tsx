import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeDefined();
  });

  it('applies variant styles', () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByText('Primary');
    expect(button.className).toContain('bg-primary-500');
  });

  it('applies size styles', () => {
    render(<Button size="lg">Large</Button>);
    const button = screen.getByText('Large');
    expect(button.className).toContain('px-6');
  });

  it('handles disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByText('Disabled');
    expect(button).toHaveProperty('disabled', true);
  });
});
