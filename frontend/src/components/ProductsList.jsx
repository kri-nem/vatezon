import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff', ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '400px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}))

export default function ProductsGrid ({ category, products, chooseFilter, filter, chooseCategory, tagsName: tags }) {
  return (<>
      <Box sx={{
        margin: '0% 3% 0% 3%', padding: '5% 3% 0% 3%', backgroundColor: '#ffffffcc'
      }}>
        <Grid container spacing={5}>
          <Grid xs={3} sx={{
            backgroundColor: '#ffffffcc'
          }}>
            <FormControl key={'asd'} fullWidth>
              <InputLabel id="asd">Filter By: </InputLabel>
              <Select
                labelId="asd"
                id="asd"
                value={filter}
                label="filter-by"
                onChange={chooseFilter}
              >
                <MenuItem value={'name/'}>Name</MenuItem>
                <MenuItem value={'category/'}>Category</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={9} sx={{
            backgroundColor: '#ffffffcc'
          }}>
            {filter === 'category/' ? <FormControl fullWidth>
              <InputLabel id="dsa">Choose category</InputLabel>
              <Select
                labelId="dsa"
                id="dsa"
                value={category}
                label="filter"
                onChange={chooseCategory}
              >{tags && tags.map((tag) => (<MenuItem key={tag.name} value={tag.endpoint}>{tag.name}</MenuItem>))}
              </Select>
            </FormControl> : filter === 'name/' ? <TextField fullWidth type="text" id="input"
                                                             onChange={chooseCategory}></TextField> : <></>}
          </Grid>

          {products && products.map((product) => (<Grid key={product.id} xs={4} md={3}>
              <Item sx={{
                backgroundImage: `url(http://localhost:5173/api/pictures/${product.picture})`,
              }}>
                <Link to={`/product/${product.id}`}>
                  <Box sx={{
                    backgroundColor: '#ffffffcc'
                  }}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: 700, textDecoration: 'none',
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: 700, textDecoration: 'none',
                      }}
                    >
                      Price: {product.price}
                    </Typography></Box>

                </Link>
              </Item>
            </Grid>))}
        </Grid>
      </Box>
    </>)
}