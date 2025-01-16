import { Box, Container, Grid, Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
];

const Projects = () => {
  return (
    <Box component="section" py={8} bgcolor="primary.main" color="primary.contrastText" id="projects">
      <Container maxWidth="lg">
        <Typography variant="h2" textAlign="center" mb={4}>
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={4} key={project.title}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                color: 'primary.contrastText'
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography>{project.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    startIcon={<Github />}
                    sx={{ color: 'primary.contrastText' }}
                  >
                    Code
                  </Button>
                  <Button 
                    size="small" 
                    startIcon={<ExternalLink />}
                    sx={{ color: 'primary.contrastText' }}
                  >
                    Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;