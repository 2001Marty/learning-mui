import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    icon: {
        marginRight: '20px',
    },
    button:{
        marginTop: '40px'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardGrid:{
       
    },
    cardContent:{
        flexGrow: 1,
    },
    cardMedia:{
        paddingTop: '56.25%' //16:9
    },
    footer:{
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0'
    }
}));

export default useStyles;