import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addProduct } from '../Service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    productname: '',
    price: '',
    amount: '',
    status: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddProduct = () => {
    const [product, setProduct] = useState(initialValue);
    const { productname, price, amount, status } = product;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const addProductDetails = async() => {
        await addProduct(product);
        history.push('./products');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Agregar producto</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Nombre del producto</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='productname' value={productname} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Precio</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='price' value={price} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Cantidad</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='amount' value={amount} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Estado</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='status' value={status} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addProductDetails()}>Agregar producto</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddProduct;