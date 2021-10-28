import { Box, Typography, makeStyles } from '@material-ui/core';
import FondoDesamparados from '../Assets/Images/losdesamparados.jpg';


const useStyles = makeStyles({
    component: {
        margin: 50,
        '& > *': {
            marginTop: 50
        }
    },
    image: {
        width: '95%',
        height: '100%'
    }
})

const CodeForInterview = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant="h4">Grupo los Desamparados</Typography>
            <Box style={{display: 'flex'}}>
                <img src={FondoDesamparados} className={classes.image} />
                
            </Box>
        </Box>
    )
}

export default CodeForInterview;