import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HighContrastToggle from '../../../components/header/HighContrastToggle';

describe('HighContrastToggle', () => {
  const renderToggle = () => {
    return render(
      <HighContrastToggle isHighContrast={false} setIsHighContrast={() => {}} />
    );
  };

  it('renders mobile and desktop icons', () => {
    renderToggle();
    expect(screen.getByTestId('high-contrast-icon-mobile')).toBeInTheDocument();
    expect(
      screen.getByTestId('high-contrast-icon-desktop')
    ).toBeInTheDocument();
  });

  it('has correct accessibility label', () => {
    renderToggle();
    expect(screen.getByRole('switch')).toHaveAttribute(
      'aria-label',
      'Toggle high contrast mode'
    );
  });
});
