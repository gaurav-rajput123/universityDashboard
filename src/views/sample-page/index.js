// material-ui
import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData(1, 4.0, 'Frozen yoghurt', 159, <Button variant="text">Available</Button>),
    createData(2, 4.3, 'Ice cream sandwich', 237, <Button variant="text">Available</Button>),
    createData(3, 6.0, 'Eclair', 262, <Button variant="text">Unavailable</Button>),
    createData(4, 4.3, 'Cupcake', 305, <Button variant="text">Available</Button>),
    createData(5, 3.9, 'Gingerbread', 356, <Button variant="text">Available</Button>)
];

const SamplePage = () => (
    <MainCard title="Affiliated Colleges">
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Serial No.</TableCell>
                        <TableCell align="left">Code</TableCell>
                        <TableCell align="left">College</TableCell>
                        <TableCell align="left">District</TableCell>
                        <TableCell align="left">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="left">{row.calories}</TableCell>
                            <TableCell align="left">{row.fat}</TableCell>
                            <TableCell align="left">{row.carbs}</TableCell>
                            <TableCell align="left">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </MainCard>
);

export default SamplePage;
