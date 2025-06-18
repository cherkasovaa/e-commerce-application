import { type JSX, useEffect, useRef, useState } from 'react';
import { newsItems } from '../model/constants';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

export const GameNews = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [, setScrollLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 1;
        setScrollLeft(containerRef.current.scrollLeft);
      }
    }, 20);
    return (): void => clearInterval(interval);
  }, []);

  return (
    <Grid size={12} py={2}>
      <Typography variant="h3" p={2}>
        News
      </Typography>
      <Box
        ref={containerRef}
        sx={{
          display: 'flex',
          overflowX: 'hidden',
          scrollBehavior: 'smooth',
        }}
      >
        {[...newsItems, ...newsItems].map((item, idx) => (
          <Card
            key={idx}
            sx={{
              maxWidth: 300,
              display: 'inline-block',
              mx: 1,
              flexShrink: 0,
            }}
          >
            <CardContent>
              <Typography variant="h6" mb={2}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Grid>
  );
};
