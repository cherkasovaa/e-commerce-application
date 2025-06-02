import { createTheme, ThemeProvider } from '@mui/material';
import type { RenderResult } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import type { ReactElement } from 'react';
import { describe, expect, it } from 'vitest';
import { GameRating } from '../GameRating';

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

const renderWithTheme = (ui: ReactElement): RenderResult => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe('GameRating', () => {
  it('game rating value is correct', () => {
    for (let i = 1; i <= 10; i++) {
      renderWithTheme(<GameRating value={i} />);

      expect(screen.getByText(`${i}`)).toBeInTheDocument();
    }
  });

  it('renders label', () => {
    renderWithTheme(<GameRating value={5} />);
    expect(screen.getByText('Game rating')).toBeInTheDocument();
  });
});
