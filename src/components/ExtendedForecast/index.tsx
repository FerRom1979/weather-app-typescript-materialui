import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);

const CardExtendedForescast = () => {
    function createData(
        name: string,
        temperatura: number,
        humedad: number,
        viento: number,
        descripcion: number,
    ) {
        return { name, temperatura, humedad, viento, descripcion };
    }

    const rows = [
        createData('dia1', 159, 6.0, 24, 4.0),
        createData('dia2', 237, 9.0, 37, 4.3),
        createData('dia3', 262, 16.0, 24, 6.0),
        createData('dia4', 305, 3.7, 67, 4.3),
        createData('dia5', 356, 16.0, 49, 3.9),
    ];

    const useStyles = makeStyles({
        table: {
            minWidth: 700,
        },
    });
    const classes = useStyles();
    return (
        <TableContainer>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Fecha</StyledTableCell>
                        <StyledTableCell align="right">temperatura</StyledTableCell>
                        <StyledTableCell align="right">descripcion</StyledTableCell>
                        <StyledTableCell align="right">tem-maxima</StyledTableCell>
                        <StyledTableCell align="right">tem-minima</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.temperatura}</StyledTableCell>
                            <StyledTableCell align="right">{row.humedad}</StyledTableCell>
                            <StyledTableCell align="right">{row.viento}</StyledTableCell>
                            <StyledTableCell align="right">{row.descripcion}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CardExtendedForescast;
