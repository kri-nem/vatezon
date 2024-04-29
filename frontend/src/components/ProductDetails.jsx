import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import { getProductDetails } from '../fetches.js'
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

export default function ProductDetails() {
  const [product, setProduct] = useState(null)
  const { id } = useParams()

  const theme = useTheme()
  let desktopScreen = useMediaQuery(theme.breakpoints.up('md')) //cheks the screens size if mobiel or desktop

  useEffect(() => {
    getProductDetails(id)
      .then(res => res.json())
      .then(json => setProduct(json))
  }, [id])

  return (desktopScreen ?
    <>
      {product && <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{
          minHeight: '100vh', margin: '0% 3% 0% 3%', padding: '6% 0% 1% 0%', backgroundColor: 'rgba(251,235,216,0.75)'
        }}
      >
        <Grid xs={6} >
          <Card sx={{ maxWidth: '100vh' }}>
            <CardMedia
              sx={{ height: 400 }}
              image={'/api/pictures/' + product.picture}
              title="green iguana"
            />
            <CardContent sx={{ margin: '0% 5% 0% 6%' }}>
              <Typography gutterBottom variant="h5" component="div" sx={{ textDecoration: 'underline', color: '#407e65' }}>
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography gutterBottom variant="body1" component="div">
                Seller: {product.uploader}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large" sx={{
                mt: 3,
                mb: 2,
                margin: '0% 5% 5% 37%',
                backgroundColor: '#407e65', // Normal button color
                color: 'black',
                '&:hover': {
                  backgroundColor: '#85b883', // Color to change to on hover
                }
              }}>Buy for {product.price}$</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      }
    </> 
    : 
    <>
    {product && <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{
          minHeight: 'auto', margin: '0% 3% 0% 3%', padding: '0.5% 2% 2% 2%', backgroundColor: 'rgba(251,235,216,0.75)'
        }}
    >
      <Grid xs={12} >
        <Card sx={{ maxWidth: '80vh' }}>
          <CardMedia
            sx={{ height: 550 }}
            image={'/api/pictures/' + product.picture}
            title="green iguana"
          />
          <CardContent sx={{ margin: 'auto' }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ textDecoration: 'underline', color: '#407e65' }}>
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
              Seller: {product.uploader}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" sx={{
              mt: 3,
              mb: 2,
              margin: 'auto',
              backgroundColor: '#407e65', // Normal button color
              color: 'black',
              '&:hover': {
                backgroundColor: '#85b883', // Color to change to on hover
              }
            }}>Buy for: {product.price} $</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
    }
  </>)
}