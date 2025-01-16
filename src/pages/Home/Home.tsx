import { Box } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/*<Projects />*/}
      <Contact />
      <Footer />
    </Box>
  );
};

export default Home;