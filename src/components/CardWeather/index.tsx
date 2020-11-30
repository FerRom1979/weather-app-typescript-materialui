import { Grid } from '@material-ui/core';
import React from 'react';

const CardWeather = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    temperatura
                </Grid>
                <Grid item xs={12} sm={4}>
                    ciudad
                </Grid>
                <Grid item xs={12} sm={4}>
                    logo
                </Grid>
                <Grid item xs={12} sm={4}>
                    tem-maxima
                </Grid>
                <Grid item xs={12} sm={4}>
                    descipcion
                </Grid>
                <Grid item xs={12} sm={4}>
                    viento
                </Grid>
                <Grid item xs={12} sm={4}>
                    tem-minima
                </Grid>
                <Grid item xs={12} sm={4}>
                    vivibilidad
                </Grid>
                <Grid item xs={12} sm={4}>
                    presion
                </Grid>
                <Grid item xs={12} sm={4}>
                    humedad
                </Grid>
                <Grid item xs={12} sm={4}>
                    otro
                </Grid>
                <Grid item xs={12} sm={4}>
                    otro
                </Grid>
            </Grid>
        </div>
    );
};

export default CardWeather;
