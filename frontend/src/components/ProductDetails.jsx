import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import { getProductDetails } from "../fetches.js";

export default function ProductDetails() {
    const [product, setProduct] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        getProductDetails(id)
            .then(res => res.json())
            .then(json => setProduct(json))
    }, [id])

    return (
        <>
            {product &&
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{minHeight: '100vh',
                        margin: '0% 3% 0% 3%',
                        padding: '5% 3% 0% 3%',
                        backgroundColor: '#ffffffcc'}}
                >

                    <Grid xs={3}>
                        <Card sx={{maxWidth: 600}}>
                            <CardMedia
                                sx={{height: 400}}
                                image={"http://localhost:5173/api/pictures/" + product.picture}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
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
                                <Button size="large">Buy for {product.price}$</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>

            }
        </>
    )
}