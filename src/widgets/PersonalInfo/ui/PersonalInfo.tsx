import React from 'react';
import { Box, Typography } from '@mui/material';
import type { PersonalInfoProps } from '../model/types';

export const PersonalInfo: React.FC<PersonalInfoProps> = ({
  firstName,
  lastName,
  birthDate,
  email,
}) => {
  //PUT TO SHARED
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Box
      display="grid"
      gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr' }}
      gap={3}
    >
      <Box>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          First Name
        </Typography>
        <Typography variant="body1" fontWeight="medium">
          {firstName}
        </Typography>
      </Box>

      <Box>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Last Name
        </Typography>
        <Typography variant="body1" fontWeight="medium">
          {lastName}
        </Typography>
      </Box>

      <Box>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Date of Birth
        </Typography>
        <Typography variant="body1" fontWeight="medium">
          {formatDate(birthDate)}
        </Typography>
      </Box>

      <Box>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Email
        </Typography>
        <Typography variant="body1" fontWeight="medium">
          {email}
        </Typography>
      </Box>
    </Box>
  );
};
