import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PriceContainer } from '../PriceContainer';

const mockPriceWithDiscount = {
  value: '€16.99',
  original: '€19.99',
  hasDiscount: true,
  currency: 'EUR',
  discount: 15,
};

describe('PriceContainer', () => {
  it('shows "Price Not available" if value is null', () => {
    render(<PriceContainer value={null} />);

    expect(screen.getByText('Price Not available')).toBeInTheDocument();
  });

  it('renders price value without discount section', () => {
    const mockPriceWithoutDiscount = {
      ...mockPriceWithDiscount,
      hasDiscount: false,
    };

    render(<PriceContainer value={mockPriceWithoutDiscount} />);

    expect(
      screen.queryByText(mockPriceWithoutDiscount.discount)
    ).not.toBeInTheDocument();
    expect(
      screen.getByText(mockPriceWithoutDiscount.value)
    ).toBeInTheDocument();
  });

  it('renders both original and discounted price with discount percentage', () => {
    render(<PriceContainer value={mockPriceWithDiscount} />);

    expect(screen.getByText('-15%')).toBeInTheDocument();
    expect(screen.getByText(mockPriceWithDiscount.value)).toBeInTheDocument();
    expect(
      screen.getByText(mockPriceWithDiscount.original)
    ).toBeInTheDocument();
  });

  it('handles case when discount is 0 but hasDiscount is true', () => {
    const mockPriceZeroDiscount = { ...mockPriceWithDiscount, discount: 0 };

    render(<PriceContainer value={mockPriceZeroDiscount} />);
    expect(screen.queryByText('-0%')).not.toBeInTheDocument();
  });
});
