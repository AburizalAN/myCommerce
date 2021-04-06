import { makeStyles } from "@material-ui/core/styles";
import { Directions } from "@material-ui/icons";

export default makeStyles((theme) => (
    {
        root : {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            maxWidth: '100%',
            flexGrow: 1
        },
        media : {
            height: 0,
            paddingTop: '56.25%',
        },
        cardActions: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
        price: {
            fontWeight: 700,
            fontSize: '16px',
            marginTop: '20px'
        }, 
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },
        grid: {
            height: '100%',
        } 
    }
))