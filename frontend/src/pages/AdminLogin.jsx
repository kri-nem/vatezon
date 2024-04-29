import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { postLogIn } from '../fetches.js'

const defaultTheme = createTheme()

const checkAllRequiredFields = (username, password) => {
  return username !== '' || password !== ''
}

const notify = (boolean, message) => {
  if (boolean) {
    toast(message)
  } else {
    toast.error(message, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })
  }
}

export default function Login () {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    if (checkAllRequiredFields(username, password)) {
      const user = {
        'username': username, 'password': password,
      }
      const response = await postLogIn(user)
      if (response.ok) {
        const token = await response.text()
        const payload = JSON.parse(atob(token.split('.')[1]))
        sessionStorage.setItem('token', token)
        sessionStorage.setItem('user', payload.sub)
        notify(true, 'Successful login!')
        navigate('/admin')
      } else {
        notify(false, 'Invalid username or password!')
      }
    } else {
      notify(false, 'Please fill all required fields!')
    }
  }

  const style = {
    "& label.Mui-focused": {
      color: "darkgreen"
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "black"
      }
    }
  } 

  return (<>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline/>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 241, 230, 0.5)',
              padding: '10%',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#85b883' }}>
              <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5" sx={{textDecoration: 'underline'}}>
              Admin log-in
            </Typography>
            <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Admin-username"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={e => setUsername(e.target.value)}
                sx={style}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => setPassword(e.target.value)}
                sx={style}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: '#407e65', // Normal button color
                  '&:hover': {
                    backgroundColor: '#85b883', // Color to change to on hover
                  }
                }}
              >
                Log In
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <ToastContainer position="top-center"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="dark"/>
    </>)
}
