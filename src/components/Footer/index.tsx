import React from 'react';
import { Grid } from '@material-ui/core';
import usesStyles from './style';

const Footer = () => {
    const classes = usesStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item sm={3}>
                    GITHUB
                </Grid>
                <Grid item sm={3}>
                    DERECHOS
                </Grid>
                <Grid item sm={3}>
                    WEB
                </Grid>
                <Grid item sm={3}>
                    LIKEDIN
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
