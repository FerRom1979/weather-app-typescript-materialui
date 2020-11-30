import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import imgLogo from '../../assets/images/logo.png';
import usesStyles from './style';

const Header = () => {
    const classes = usesStyles();
    const logo = imgLogo;

    const date = new Date().toLocaleDateString('es-AR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });

    return (
        <div className={classes.root}>
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item xs={12} sm={4}>
                    <img src={logo} alt="logo" className={classes.imgLogo} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h3" className={classes.title}>
                        Clima Hoy
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" className={classes.title}>
                        {date}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;
