export const getGradientBackground = (theme): string => `
          radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px),
          linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.background.default} 100%)`;
