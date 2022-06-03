import { styled } from '@mui/material/styles';
import { Button, Card } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { useContext, useEffect, useState } from 'react';
import { countContext } from 'index';
import axios from 'axios';

// styles
const IFrameWrapper = styled('iframe')(({ theme }) => ({
    height: 'calc(100vh - 210px)',
    border: '1px solid',
    borderColor: theme.palette.primary.light
}));

// ============================|| MATERIAL ICONS ||============================ //
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

// const rows = [
//     createData('Computer Profeciency and Office Automation', 159, 6.0, <Button variant="text">Available</Button>, 4.0),
//     createData('Creating App for Beginners', 237, 9.0, <Button variant="text">Available</Button>, 4.3),
//     createData('Machine Learning', 262, 16.0, <Button variant="text">Unavailable</Button>, 6.0),
//     createData('Programming with python', 305, 3.7, <Button variant="text">Available</Button>, 4.3),
//     createData('Mobile App Development', 356, 16.0, <Button variant="text">Available</Button>, 3.9)
// ];

const MaterialIcons = () => {
   const context = useContext(countContext)
   const [rows, setRows] = useState([])
   useEffect(()=>{
    async function getTeachers () {
        try {
            const callRes = await axios({
                url: "https://api.keewesolutions.com/university/courselist", method: 'GET'
            })
            console.log(callRes.data.response)
            const dataRowArr = callRes.data.response.map((item)=>{
                return {
                    id: item.courseId,
                    title: item.title,
                    category: item.category,
                    no: item.number,
                    organisation: item.organisation
                }
            })
            console.log(dataRowArr)
            setRows(dataRowArr)
        } catch (error) {
            console.log(error)
        }
    }
    getTeachers()
},[])
    return (
    <MainCard title="Material Icons" secondary={function(){
        return (
            <>
            <span>Total Courses : {context.courseCount}</span> 
            </>
        )
    }()}>
        <Card sx={{ overflow: 'hidden' }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                        <StyledTableCell align="center">id</StyledTableCell>
                            <StyledTableCell align='center'>Courses</StyledTableCell>
                            <StyledTableCell align="center">Category</StyledTableCell>
                            <StyledTableCell align="center">Price</StyledTableCell>
                            <StyledTableCell align="center">Organisation</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.id}>
                                <StyledTableCell component="th" scope="row">
                                    {row.id}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.title}</StyledTableCell>
                                <StyledTableCell align="center">{row.category}</StyledTableCell>
                                <StyledTableCell align="center">{row.no}</StyledTableCell>
                                <StyledTableCell align="center">{row.organisation}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    </MainCard>
)};

export default MaterialIcons;
