import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        background: 'blue',
        Width: '100%',
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        display: 'flex',
    },
    search: {
        backgroundColor: 'White',
        borderRadius: '40%',
        maxWidth: 300,
        padding: 15,
        paddingLeft: 20,
        margin: 30,
    },
}));
export default useStyles;
