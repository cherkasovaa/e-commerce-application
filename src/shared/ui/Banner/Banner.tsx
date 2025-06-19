import {
  Box,
  Paper,
  Stack,
  Typography,
  IconButton,
  useTheme,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from 'react';
import { getGradientBackground } from '@/shared/helpers/getGradientBackground';

interface BannerProps {
  title: string;
  description: string;
  promo?: {
    code: string;
    isCopied: boolean;
  };
  imageUrl?: string;
}

export const Banner = (props: BannerProps) => {
  const { title, description, promo, imageUrl } = props;
  const [copied, setCopied] = useState(false);
  const theme = useTheme();

  const handleCopy = () => {
    if (promo?.code) {
      navigator.clipboard.writeText(promo.code).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: { xs: 'flex-start', md: 'center' },
        gap: { xs: 0.5, md: 2 },
        p: { xs: 2, sm: 3 },
        mb: 4,
        backgroundImage: getGradientBackground(theme),
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      }}
    >
      <Stack spacing={1} flex={1} width="100%">
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>

        {promo?.code && (
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            flexWrap="wrap"
          >
            <Box
              sx={{
                border: '1px solid',
                borderColor: copied ? 'success.main' : 'grey.400',
                borderRadius: 1,
                px: 1.5,
                py: 0.5,
                minWidth: { xs: 100, md: 150 },
                textAlign: 'center',
                backgroundColor: copied ? 'success.light' : 'background.paper',
                transition: 'all 0.3s ease',
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                {copied ? 'Copied' : promo.code}
              </Typography>
            </Box>

            {promo.isCopied && (
              <IconButton size="small" onClick={handleCopy}>
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            )}
          </Stack>
        )}
      </Stack>

      {imageUrl && (
        <Box
          component="img"
          src={imageUrl}
          alt="Promo"
          sx={{
            width: { xs: '25%', md: 180 },
            maxHeight: 160,
            objectFit: 'cover',
            borderRadius: 2,
            alignSelf: { xs: 'center', md: 'flex-start' },
          }}
        />
      )}
    </Paper>
  );
};
