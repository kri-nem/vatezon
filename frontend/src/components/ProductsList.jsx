import { Link } from "react-router-dom"
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { Box } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '400px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
}));

export default function ProductsList({ products, onNameFilterChange }) {
    return (
        <div>
            <input name="filter" onChange={(e) => onNameFilterChange(e.target.value)} />
            <Box sx={{ 
                margin: '0% 3% 0% 3%',
                padding: '5% 3% 0% 3%',
                backgroundColor: '#ffffffcc'
             }}>
                <Grid container spacing={5}>
                    {products.map((product) => (
                        <Grid key={product.id} xs={4} md={3} >
                            <Item sx={{
                                backgroundImage: `url(${product.pictureURL})`,
                            }}>
                                <Link to={`/product/${product.id}`}>
                                    <Typography
                                        variant="h6"
                                        component="div"
                                        sx={{
                                            fontWeight: 700,
                                            textDecoration: 'none',
                                        }}
                                    >
                                        {product.name}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        component="div"
                                        sx={{
                                            fontWeight: 700,
                                            textDecoration: 'none',
                                        }}
                                    >
                                        {product.price}
                                    </Typography>
                                </Link>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div >
    )
}