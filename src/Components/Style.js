import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(5, 0, 5),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    Form : {
        display: 'flex',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        
    },
}));

export default useStyles