import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { ProductDetails } from '../ui/ProductDetails';

const mockProduct = {
  title: 'Test Game Title',
  description: 'This is a test description',
  rating: 9.0,
  price: {
    value: '€16.99',
    original: '€19.99',
    hasDiscount: true,
    currency: 'EUR',
    discount: 15,
  },
};

const theme = createTheme({
  custom: {
    box: {
      width: 32,
      height: 32,
      padding: '7px 0',
      borderRadius: 3,
      backgroundColor: '#58e30d',
    },
  },
});

describe('ProductDetails', () => {
  it('renders product title and description', () => {
    render(
      <ThemeProvider theme={theme}>
        <HashRouter>
          <ProductDetails {...mockProduct} />
        </HashRouter>
      </ThemeProvider>
    );

    expect(
      screen.getByRole('heading', { name: 'Test Game Title' })
    ).toBeInTheDocument();
    expect(screen.getByText('This is a test description')).toBeInTheDocument();
  });

  it('renders rating if rating is provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <HashRouter>
          <ProductDetails {...mockProduct} />
        </HashRouter>
      </ThemeProvider>
    );

    expect(screen.getByText('9')).toBeInTheDocument();
  });

  it('does not render GameRating if rating is null', () => {
    const productWithoutRating = { ...mockProduct, rating: null };

    render(
      <ThemeProvider theme={theme}>
        <HashRouter>
          <ProductDetails {...productWithoutRating} />
        </HashRouter>
      </ThemeProvider>
    );

    expect(screen.queryByText('9')).not.toBeInTheDocument();
  });

  it('renders rating if rating is provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <HashRouter>
          <ProductDetails {...mockProduct} />
        </HashRouter>
      </ThemeProvider>
    );

    expect(screen.getByText('€19.99')).toBeInTheDocument();
  });

  it('does not render GameRating if rating is null', () => {
    const productWithoutRating = { ...mockProduct, price: null };

    render(
      <ThemeProvider theme={theme}>
        <HashRouter>
          <ProductDetails {...productWithoutRating} />
        </HashRouter>
      </ThemeProvider>
    );

    expect(screen.getByText('Price Not available')).toBeInTheDocument();
  });
});
