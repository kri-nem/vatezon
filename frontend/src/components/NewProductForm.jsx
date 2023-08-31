import { useState } from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const NewProductForm = ({productTypes, addNewProduct}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [productType, setProductType] = useState("");
    const [pictureURL, setPictureURL] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
            name: name,
            description: description,
            price: price,
            productType: productType,
            pictureURL: pictureURL,
        }
        console.log(product);
        return addNewProduct(product);
    }

    /*return (
        <form className="NewProductForm" onSubmit={onSubmit}>
            <div className="control">
                <label htmlFor="name">Name:</label>
                <input name="name" id="name" defaultValue={name} onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="control">
                <label htmlFor="description">Description:</label>
                <input name="description" id="description" defaultValue={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>

            <div className="control">
                <label htmlFor="price">Price:</label>
                <input name="price" id="price" defaultValue={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="productType">Product type:</label>
                <select onChange={(e) => setProductType(e.target.value)}>
                    <option disabled selected>Select a type!</option>
                    {productTypes.map((o,i) => <option key={i} value={o}>{o}</option>)}
                </select>
            </div>

            <div className="control">
                <label htmlFor="pictureURL">Picture URL:</label>
                <input name="pictureURL" id="pictureURL" defaultValue={pictureURL} onChange={(e) => setPictureURL(e.target.value)}/>
            </div>

            <div className="button">
                <button type="submit">Submit</button>
            </div>
        </form>
    )*/
    const defaultTheme = createTheme();
    
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs" onSubmit={handleSubmit}>
            <CssBaseline />
            <Box
                sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
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
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="pictureURL"
                    label="Picture URL"
                    name="pictureURL"
                    autoFocus
                    onChange={(e) => setPictureURL(e.target.value)}
                />
                <label htmlFor="productType">Product type:</label>
                <select defaultValue="Select a type!" onChange={(e) => setProductType(e.target.value)}>
                    <option disabled >Select a type!</option>
                    {productTypes.map((o,i) => <option key={i} value={o}>{o}</option>)}
                </select>
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
        </ThemeProvider>
    );
}  


export default NewProductForm