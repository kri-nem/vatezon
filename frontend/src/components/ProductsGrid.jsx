import { Link } from "react-router-dom"
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ProductsGrid({ products, chooseFilter, filter, chooseCategory }) {
    return (
        <div key={"asd"}>
            <Box key="outer-div-key" sx={{ minWidth: 120 }}>
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
                </FormControl>
            </Box>
            <div key="inner-div-key"> {filter === 'category/' ?
                <Box sx={{ minWidth: 40 }}>
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
                </Box> : filter === 'name/' ? <input type="text" id="input" onChange={chooseCategory}></input> : <></>}
            </div>
            <div>
                {products.map((product) => (
                    <Link key={product.id} to={`/product/${product.id}`}>
                        <div>
                            <h4>{product.name}</h4>
                            <h4>{product.price}</h4>
                            <h4>{product.pictureURL}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}