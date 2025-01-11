import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"



const NavBar = () => {
    const StyledToobar = styled(Toolbar)(({ theme }) => ({
		display: "flex",

	}));
  

    return (
      <>
        <AppBar position="absolute">
            <StyledToobar>
            <MenuItem>About</MenuItem>
            <MenuItem>Skils</MenuItem>
            <MenuItem>Projects</MenuItem>
            </StyledToobar>
        </AppBar>
      </>
    )
  }
  
  export default NavBar
  