import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import AdbIcon from '@mui/icons-material/Adb'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const loggedOut = [['Products', '/products'], ['Sign up', '/signup'], ['Log In', '/login']]
const loggedIn = [['Products', '/products'], ['Add product', '/addProduct'], ['Log out', '/signup']];

function ResponsiveAppBar() {
  const [token, setToken] = useState('');

  const handleLogIn = () => {
    setToken(sessionStorage.getItem("token"));
  }

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    setToken('');
  }

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#407e65' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Bay
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {token === '' ?
              <>
                <Link key={loggedOut[0][0]} to={loggedOut[0][1]} style={{ textDecoration: 'none', margin: 10, color: 'white', display: 'block' }}>
                  <Typography textAlign="center">{loggedOut[0][0]}</Typography>
                </Link>
                <Link key={loggedOut[1][0]} to={loggedOut[1][1]} style={{ textDecoration: 'none', margin: 10, color: 'white', display: 'block' }}>
                  <Typography textAlign="center">{loggedOut[1][0]}</Typography>
                </Link>
                <Link key={loggedOut[2][0]} to={loggedOut[2][1]} style={{ textDecoration: 'none', margin: 10, color: 'white', display: 'block' }} onClick={handleLogIn}>
                  <Typography textAlign="center">{loggedOut[2][0]}</Typography>
                </Link>
              </>
              :
              <>
                <Link key={loggedIn[0][0]} to={loggedIn[0][1]} style={{ textDecoration: 'none', margin: 10, color: 'white', display: 'block' }}>
                  <Typography textAlign="center">{loggedIn[0][0]}</Typography>
                </Link>
                <Link key={loggedIn[1][0]} to={loggedIn[1][1]} style={{ textDecoration: 'none', margin: 10, color: 'white', display: 'block' }}>
                  <Typography textAlign="center">{loggedIn[1][0]}</Typography>
                </Link>
                <Link key={loggedIn[2][0]} to={loggedIn[2][1]} style={{ textDecoration: 'none', margin: 10, color: 'white', display: 'block' }} onClick={handleLogout}>
                  <Typography textAlign="center">{loggedIn[2][0]}</Typography>
                </Link>
              </>
            }

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar