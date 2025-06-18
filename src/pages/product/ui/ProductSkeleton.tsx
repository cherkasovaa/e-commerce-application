import { Box, Grid, Skeleton } from '@mui/material';
import type { JSX } from 'react';

export const ProductSkeleton = (): JSX.Element => {
  return (
    <Grid container direction="column" spacing={8} sx={{ pb: 10 }}>
      <Grid>
        <Skeleton
          variant="rounded"
          sx={{ width: { xs: '80%', sm: 300 }, height: { xs: 24, sm: 30 } }}
        />
        <Skeleton
          variant="rounded"
          sx={{ width: { xs: '100%', md: '60%' }, height: '40vh', mt: 2 }}
        />
        <Skeleton
          variant="text"
          sx={{
            width: { xs: '40%', sm: '20%' },
            height: { xs: 60, sm: 80 },
            mt: 2,
          }}
        />
      </Grid>

      <Grid>
        <Skeleton
          variant="text"
          sx={{
            width: { xs: '60%', sm: 300 },
            height: { xs: 40, sm: 80 },
            mb: 2,
          }}
        />
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <Skeleton
            variant="rounded"
            sx={{
              width: { xs: '100%', md: '48%' },
              height: { xs: 200, sm: 300 },
            }}
          />
          <Skeleton
            variant="rounded"
            sx={{
              display: { xs: 'none', md: 'block' },
              width: { xs: '100%', md: '48%' },
              height: { xs: 200, sm: 300 },
            }}
          />
        </Box>
      </Grid>

      <Grid>
        <Skeleton
          variant="text"
          sx={{
            width: { xs: '60%', sm: 300 },
            height: { xs: 40, sm: 80 },
            mb: 2,
          }}
        />
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexDirection: { xs: 'column', lg: 'row' },
          }}
        >
          <Skeleton
            variant="rounded"
            sx={{
              width: { sm: '100%', lg: '69%' },
              height: { xs: 120, md: 300 },
            }}
          />
          <Skeleton
            variant="rounded"
            sx={{
              width: { sm: '100%', lg: '29%' },
              height: { xs: 120, md: 300 },
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
