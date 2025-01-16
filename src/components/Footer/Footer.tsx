import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = {
    github: 'https://github.com/fabiohsvp',
    linkedin: 'https://linkedin.com/in/fabio-henrique-1608bb1b5',
    twitter: 'https://twitter.com/YOUR_TWITTER_USERNAME'
  };

  return (
    <Box component="footer" py={4} bgcolor="primary.main" color="primary.contrastText">
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center">
          <Stack direction="row" spacing={2}>
            <IconButton 
              color="inherit" 
              aria-label="GitHub"
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </IconButton>
            <IconButton 
              color="inherit" 
              aria-label="LinkedIn"
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </IconButton>
          </Stack>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Fabio Henrique. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;