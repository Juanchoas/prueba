import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }
})

const NavBar = () => {
    const classes = useStyle();
    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <NavLink className={classes.tabs} to="./" exact>Los Desamparados APP</NavLink>
                <NavLink className={classes.tabs} to="all" exact>Usuarios</NavLink>
                <NavLink className={classes.tabs} to="add" exact>Agregar usuario</NavLink>
                <NavLink className={classes.tabs} to="products" exact>Productos</NavLink>
                <NavLink className={classes.tabs} to="addproduct" exact>Agregar productos</NavLink>

            </Toolbar>
        </AppBar>
    )
}

export default NavBar;