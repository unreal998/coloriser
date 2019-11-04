
import React from "react";
import Dialog from "@material-ui/core/Dialog/Dialog";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import TextField, {BaseTextFieldProps as classes} from "@material-ui/core/TextField/TextField";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

export function LoginForm() {
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Dialog children={<div>Dialog</div>} open={true} fullScreen={fullScreen} >
            <DialogTitle id="Title">{"Login"}</DialogTitle>
            <DialogContent>
                <form method={"GET"} action="#">
                    <TextField
                        className={classes.margin}
                        id="Name"
                        label="E-mail"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        className={classes.margin}
                        id="Name"
                        type ="password"
                        label="password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                </form>
            </DialogContent>

        </Dialog>
    );
}
