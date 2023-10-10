import { useState } from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import VisuallyHiddenInput from './VisuallyHiddenInput.jsx'

const NewProductForm = ({ productTypes, addNewProduct }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [productType, setProductType] = useState('')
  const [picture, setPicture] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('name', name)
    data.append('description', description)
    data.append('price', price)
    data.append('tags', JSON.stringify([productType]))
    data.append('picture', picture)

    console.log(data)
    return addNewProduct(data)
  }
  const defaultTheme = createTheme()

  return (<ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs" onSubmit={handleSubmit}>
      <CssBaseline/>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#ffffffcc',
          padding: '10%',
        }}
      >
        <Typography component="h1" variant="h5">
          Add new product
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoFocus
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="description"
            label="Description"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="price"
            label="Price"
            name="price"
            autoFocus
            onChange={(e) => setPrice(e.target.value)}
          />

          <Button
            margin="normal"
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon/>}
            href="#file-upload"
            fullWidth
            onChange={(e) => setPicture(e.target.files[0])}
          >
            Upload a file
            <VisuallyHiddenInput accept="image/*" type="file"/>
          </Button>

          <label htmlFor="productType">Product type:</label>
          <select defaultValue="Select a type!" onChange={(e) => setProductType(e.target.value)}>
            <option disabled>Select a type!</option>
            {productTypes.map((o, i) => <option key={i} value={o.name}>{o.name}</option>)}
          </select>
          <hr/>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>)
}

export default NewProductForm