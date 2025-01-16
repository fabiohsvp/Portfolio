import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { Code2, Database, Layout, Server } from 'lucide-react';

const skills = [
  {
    title: 'Frontend Development',
    icon: Layout,
    description: 'React, TypeScript, Material-UI, HTML5, CSS3',
  },
  {
    title: 'Backend Development',
    icon: Server,
    description: 'Node.js, Express, REST APIs',
  },
  {
    title: 'Database',
    icon: Database,
    description: 'MongoDB, PostgreSQL, MySQL',
  },
  {
    title: 'Programming Languages',
    icon: Code2,
    description: 'JavaScript, TypeScript, Python',
  },
];

const Skills = () => {
  return (
    <Box component="section" py={8} bgcolor="primary.main" color="primary.contrastText" id="skills">
      <Container maxWidth="lg">
        <Typography variant="h2" textAlign="center" mb={4}>
          Skills
        </Typography>
        <Grid container spacing={4}>
          {skills.map((skill) => (
            <Grid item xs={12} sm={6} md={3} key={skill.title}>
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  color: 'primary.contrastText',
                }}
                elevation={2}
              >
                <skill.icon size={40} style={{ marginBottom: '1rem' }} />
                <Typography variant="h6" gutterBottom>
                  {skill.title}
                </Typography>
                <Typography variant="body2">
                  {skill.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;