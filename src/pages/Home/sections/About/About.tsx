import { Box, Container, Grid, Typography } from '@mui/material';

const About = () => {
  return (
    <Box component="section" py={8} bgcolor="primary.main" color="primary.contrastText" id="about">
      <Container maxWidth="lg">
        <Typography variant="h2" textAlign="center" mb={4}>
          About Me
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              I'm a passionate Software Engineer with experience in building web applications
              using modern technologies. My focus is on creating efficient, scalable, and
              user-friendly solutions that solve real-world problems.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              With expertise in React, TypeScript, and various other technologies,
              I strive to deliver high-quality code and exceptional user experiences.
              I'm always eager to learn new technologies and take on challenging projects.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;