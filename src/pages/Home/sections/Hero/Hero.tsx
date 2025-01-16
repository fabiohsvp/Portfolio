import Avatar from "../../../../assets/images/avatar.jpg"
import { Box, Container, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Download, Mail } from "lucide-react";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import AnimatedCanvas from "../../../../components/AnimatedCanvas";
import { Link as ScrollLink } from "react-scroll";

const StyledHero = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "100vh",
  display: "flex",
  alignItems: "center",
  position: "relative",
  [theme.breakpoints.up('xs')]: {
    paddingTop: "150px",
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: "0px",
  }
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  border: `4px solid ${theme.palette.primary.contrastText}`,
  objectFit: "cover",
  boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
  position: "relative",
  zIndex: 2
}));

const CanvasWrapper = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1
});

const Hero = () => {
  return (
    <StyledHero>
      <CanvasWrapper>
        <AnimatedCanvas />
      </CanvasWrapper>
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5} textAlign="center">
            <StyledImg
              alt="avatar"
              src={Avatar}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography color="primary.contrastText" variant="h1" textAlign={{ xs: "center", md: "left" }} paddingBottom={2}>
              Fabio Henrique
            </Typography>
            <Typography color="primary.contrastText" variant="h2" textAlign={{ xs: "center", md: "left" }}>
              I'm Software Engineer
            </Typography>
            <Grid container spacing={3} paddingTop={3}>
              <Grid item xs={12} sm={6} md={4}>
                <a
                  href="/curriculo.pdf" // Caminho relativo ao arquivo
                  download="Fabio_Henrique_CV.pdf" // Nome do arquivo baixado
                  style={{ textDecoration: "none" }}
                >
                  <StyledButton fullWidth>
                    <Download />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </a>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <StyledButton onClick={() => console.log("contact")} fullWidth>
                  <Mail />
                  <ScrollLink to="contact" smooth={true} duration={500}>
                    <Typography>Contact me</Typography>
                  </ScrollLink>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;