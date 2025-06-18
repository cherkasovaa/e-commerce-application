import type { FC } from 'react';

import { APP_PAGE_NAMES } from '@/shared/config/routes/pageNames';
import { APP_PATHS } from '@/shared/config/routes/paths';
import { NavigationButton } from '@/shared/ui';
import { Box } from '@mui/material';

export const AuthButtons: FC = () => (
  <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2 } }}>
    <NavigationButton to={APP_PATHS.LOGIN} color="inherit">
      {APP_PAGE_NAMES.LOGIN}
    </NavigationButton>
    <NavigationButton to={APP_PATHS.REGISTER} color="inherit">
      {APP_PAGE_NAMES.REGISTER}
    </NavigationButton>
  </Box>
);
