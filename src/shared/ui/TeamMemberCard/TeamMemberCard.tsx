import type { AppDeveloper } from '@/shared/types/appDevelopers';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import type { JSX } from 'react';

export const TeamMemberCard = (developer: AppDeveloper): JSX.Element => {
  return (
    <Card sx={{ width: '100%', maxWidth: 345 }}>
      <CardActionArea sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          width="100%"
          height={300}
          image={developer.photo}
          alt={`${developer.name} - out ${developer.role}`}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ height: '100%' }}>
          <Link
            href={developer.github}
            underline="none"
            target="_blank"
            sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}
          >
            <GitHubIcon fontSize="small" />

            <Typography gutterBottom variant="h4" component="div">
              {developer.name}
            </Typography>
          </Link>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontSize: '1rem' }}
          >
            {developer.role}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {developer.bio}
          </Typography>

          <Box>
            <List dense={false}>
              {developer.responsibilities.map((resp) => (
                <ListItem
                  key={resp}
                  disableGutters
                  sx={{ display: 'flex', alignItems: 'flex-start', p: 0 }}
                >
                  <ChevronRightIcon sx={{ mt: 0.5 }} />
                  <ListItemText primary={resp} />
                </ListItem>
              ))}
            </List>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
