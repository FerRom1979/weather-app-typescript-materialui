import { IconButton, TextField } from '@material-ui/core';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import usesStyles from './style';

const Search = () => {
    const classes = usesStyles();
    return (
        <div className={classes.root}>
            <form className={classes.form}>
                <div className={classes.search}>
                    <TextField label="Seleccione una Ciudad" />
                    <IconButton type="submit">
                        <SearchIcon />
                    </IconButton>
                </div>
            </form>
        </div>
    );
};

export default Search;
