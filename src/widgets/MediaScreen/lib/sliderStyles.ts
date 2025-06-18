import type { Theme } from '@mui/material';

export const getSliderStyles = (theme: Theme) => ({
  '.swiper-button-next, .swiper-button-prev': {
    color: theme.palette.primary.contrastText,
    background: 'rgba(71, 71, 71, 0.7)',
    borderRadius: '50%',
    width: 48,
    height: 48,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
    transition: 'background 0.3s',
    backdropFilter: 'blur(45px)',
  },
  '.swiper-button-next:hover, .swiper-button-prev:hover': {
    background: 'rgba(71, 71, 71, 1)',
  },
  '.swiper-button-next:after, .swiper-button-prev:after': {
    fontSize: 15,
  },
  '.swiper-pagination-bullet': {
    background: theme.palette.text.disabled,
    opacity: 1,
    width: 12,
    height: 12,
    margin: '0 6px',
    transition: '0.3s',
  },
  '.swiper-pagination-bullet-active': {
    background: theme.palette.primary.main,
    transform: 'scale(1.1)',
  },
});
