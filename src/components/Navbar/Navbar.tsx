import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-evenly"
}));

const StyledMenuItem = styled(MenuItem)(() => ({
  cursor: "pointer"
}));

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <ScrollLink to="about" smooth={true} duration={500}>
          <StyledMenuItem>About</StyledMenuItem>
        </ScrollLink>
        <ScrollLink to="skills" smooth={true} duration={500}>
          <StyledMenuItem>Skills</StyledMenuItem>
        </ScrollLink>
        {/*<ScrollLink to="projects" smooth={true} duration={500}>
          <StyledMenuItem>Projects</StyledMenuItem>
  </ScrollLink>*/}
        <ScrollLink to="contact" smooth={true} duration={500}>
          <StyledMenuItem>Contact</StyledMenuItem>
        </ScrollLink>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;