import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getProducts, deleteProduct } from '../Service/api';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})


const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllProducts();
    }, []);

    const deleteProductData = async (id) => {
        await deleteProduct(id);
        getAllProducts();
    }

    const getAllProducts = async () => {
        let response = await getProducts();
        setProducts(response.data);
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Nombre del producto</TableCell>
                    <TableCell>Precio</TableCell>
                    <TableCell>Cantidad</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {products.map((product) => (
                    <TableRow className={classes.row} key={product.id}>
                        <TableCell>{product._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{product.productname}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>{product.amount}</TableCell>
                        <TableCell>{product.status}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${product._id}`}>Editar</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteProductData(product._id)}>Eliminar</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default AllProducts;