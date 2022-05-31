import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// project imports
import MainCard from 'ui-component/cards/MainCard';
// import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

// assets
import LinkIcon from '@mui/icons-material/Link';
import QuiltedImageList from './CellGallery';
import CellRemarks from './CellRemarks';

// styles
const IFrameWrapper = styled('iframe')(({ theme }) => ({
    height: 'calc(100vh - 210px)',
    border: '1px solid',
    borderColor: theme.palette.primary.light
}));

// =============================|| TABLER ICONS ||============================= //

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0
    }
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Malpractices in college canteen', 159, 6.0, <Button variant="text">Available</Button>, 4.0),
    createData('Cheating Cases in exams', 237, 9.0, <Button variant="text">Available</Button>, 4.3),
    createData('Training issues', 262, 16.0, <Button variant="text">Unavailable</Button>, 6.0),
    createData('Glitches in Webinars', 305, 3.7, <Button variant="text">Available</Button>, 4.3),
    createData('Gingerbread', 356, 16.0, <Button variant="text">Available</Button>, 3.9)
];

const TablerIcons = () => (
    <MainCard title="Payment Details">
        <Card sx={{ overflow: 'hidden' }}>
            {/* <QuiltedImageList /> */}
            {/* <CellRemarks /> */}
        </Card>
        {/* secondary={<SecondaryAction icon={<LinkIcon fontSize="small" />} link="https://tablericons.com/" />} */}
    </MainCard>
);

export default TablerIcons;
