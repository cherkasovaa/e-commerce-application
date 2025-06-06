import { convertToLink } from '@/shared/helpers/convertToLink';
import { getChunksFromText } from '@/shared/helpers/getChunksFromText';
import { Box, Link, Typography } from '@mui/material';
import type { JSX } from 'react';
import { contentArray } from '../model/constants';
import type { About } from '../model/types';

export const AboutIntro = (): JSX.Element => {
  const SECTION_TITLE = 'About Us';
  const RSS_SCHOOL_URL = 'https://rs.school';

  return (
    <Box component="section" sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
      <Box sx={{ mb: { xs: 0, md: 3 } }}>
        <Typography variant="h1" component="h1" sx={{ mb: 3, flex: 1 }}>
          {SECTION_TITLE}
        </Typography>

        <Typography component="p">
          Welcome to Game Shop — a modern e-commerce project created by a team
          of three talented developers as part of the{' '}
          <Link href={RSS_SCHOOL_URL} target="_blank" underline="none">
            RSSchool
          </Link>{' '}
          educational program. Our project is an online game store developed
          using cutting-edge technologies and web development best practices.
        </Typography>
      </Box>

      {contentArray.map(
        ({ title, content }: About): JSX.Element => (
          <Box key={title} sx={{ width: { xs: '100%', md: '48%' } }}>
            <Typography variant="h3" component="h2" sx={{ mb: 3 }}>
              {title}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {getChunksFromText(content)
                .filter((chunk) => chunk)
                .map(
                  (chunk, i): JSX.Element => (
                    <Typography key={i} component="p">
                      {convertToLink(chunk)}
                    </Typography>
                  )
                )}
            </Box>
          </Box>
        )
      )}
    </Box>
  );
};
