import {AppBar,Toolbar,styled,Typography} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
  background: #64665E;
`;

const Tabs = styled(NavLink)`
  color: black;
  font-size: 25px;
  font-family: "Brush Script MT", cursive;
  font-weight: bold;
  margin-right: 20px;
  text-decoration: none;
`;
const Navbar = () =>{
    return (
      <Header position="static">
        <Toolbar>
          <Typography
            variant="h4"
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontFamily: "Pacifico",
              fontWeight: 600,
              letterSpacing: ".2rem",
              color: " black",
              textDecoration: "none",
            }}
          >
            Bloggers
          </Typography>
          <Tabs to="/">Home</Tabs>
          <Tabs to="/lis">Lists</Tabs>
          <Tabs to="/reg">Register</Tabs>
        </Toolbar>
      </Header>
    );
}

export default Navbar;