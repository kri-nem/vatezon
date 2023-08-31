import {Link} from "react-router-dom"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import {styled} from '@mui/material/styles'
import Paper from '@mui/material/Paper'

const Item = styled(Paper)(({theme}) => ({
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

export default function ProductsGrid({products, chooseFilter, filter, chooseCategory}) {
    return (
        <>
            <Box sx={{
                margin: '0% 3% 0% 3%',
                padding: '5% 3% 0% 3%',
                backgroundColor: '#ffffffcc'
            }}>
                <Grid container spacing={5}>
                    <Grid xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id='asd'>Filter By: </InputLabel>
                            <Select
                                labelId='asd'
                                id='asd'
                                value={''}
                                label='filter-by'
                                onChange={chooseFilter}
                            >
                                <MenuItem value={"name/"}>Name</MenuItem>
                                <MenuItem value={"category/"}>Category</MenuItem>
                            </Select>

                            {filter === 'category/' ?
                                <FormControl fullWidth>
                                    <InputLabel id="dsa">Choose category</InputLabel>
                                    <Select
                                        labelId="dsa"
                                        id="dsa"
                                        value={""}
                                        label="filter"
                                        onChange={chooseCategory}
                                    >
                                        <MenuItem value={"road_cycling_shoes"}>Road Cycling Shoes</MenuItem>
                                        <MenuItem value={"scarf"}>Scarf</MenuItem>
                                        <MenuItem value={"washing_machine"}>Washing machine</MenuItem>
                                    </Select>
                                </FormControl>
                                : filter === 'name/' ? <input type="text" id="input" onChange={chooseCategory}></input> : <></>}
                        </FormControl>
                    </Grid>

                    {products.map((product) => (
                        <Grid key={product.id} xs={4} md={3}>
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
        </>
    )
}