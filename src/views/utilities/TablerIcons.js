import PropTypes from 'prop-types';

// material-ui
import { Box, Card, Grid, Typography } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';

// ===============================|| COLOR BOX ||=============================== //

const columns = [
    {
        field: 'id',
        headerName: 'course ID',
        width: 350
    },
    {
        field: 'userId',
        headerName: 'userId',
        width: 130
    },
    {
        field: 'amount',
        headerName: 'Amount',
        width: 100
    },
    {
        field: 'orderId',
        headerName: 'Order ID',
        type: 'number',
        width: 150
    },
    {
        field: 'paymentStatus',
        headerName: 'Payment ID',
        width: 100
    }
];

const rows = [
    { id: 1, amount: 'Kumari', courseName: 'Neha', order: 35, payment: 'sucessful' },
    { id: 2, amount: 'Sharma', courseName: 'Lata', order: 42, payment: 'sucessful' },
    { id: 3, amount: 'Kaur', courseName: 'Jasmine', order: 45, payment: 'sucessful' },
    { id: 4, amount: 'khatri', courseName: 'Anchal', order: 16, payment: 'sucessful' },
    { id: 5, amount: 'Rawat', courseName: 'Sakshi', order: null, payment: 'sucessful' },
    { id: 6, amount: 'Sharma', courseName: 'Srijana', order: 150, payment: 'sucessful' },
    { id: 7, amount: 'Kaur', courseName: 'Simran', order: 44, payment: 'sucessful' },
    { id: 8, amount: 'Saluja', courseName: 'Roji', order: 36, payment: 'sucessful' },
    { id: 9, amount: 'Kumari', courseName: 'Sita', order: 65, payment: 'sucessful' }
];

const ColorBox = ({ bgcolor, title, data, dark }) => (
    <>
        <Card sx={{ mb: 3 }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 4.5,
                    bgcolor,
                    color: dark ? 'grey.800' : '#ffffff'
                }}
            >
                {title && (
                    <Typography variant="subtitle1" color="inherit">
                        {title}
                    </Typography>
                )}
                {!title && <Box sx={{ p: 1.15 }} />}
            </Box>
        </Card>
        {data && (
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="subtitle2">{data.label}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
                        {data.color}
                    </Typography>
                </Grid>
            </Grid>
        )}
    </>
);

ColorBox.propTypes = {
    bgcolor: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.object.isRequired,
    dark: PropTypes.bool
};

// ===============================|| UI COLOR ||=============================== //

const TablerIcons = () => 

{
    const [row, setRow]= useState([])
    useEffect(()=>{
        async function getTeachers () {
            try {
                const callRes = await axios({
                    url: "https://api.keewesolutions.com/university/paymentlist", method: 'GET'
                })
                const dataRowArr = callRes.data.response.map((item)=>{
                    return {
                        id: item.courseId,
                        userId: item.userId,
                        amount: item.amount,
                        orderId: item.orderId,
                        paymentStatus: item.paymentStatus
                    }
                })
                console.log(dataRowArr)
                setRow(dataRowArr)
            } catch (error) {
                console.log(error)
            }
        }
        getTeachers()
    },[])
    
    return (
    <MainCard title="Payment Details" secondary={<SecondaryAction />}>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid rows={row} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
                </div>
            </Grid>
            {/* <Grid item xs={12}>
                <SubCard title="Secondary Color">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox
                                bgcolor="secondary.light"
                                data={{ label: 'DeepPurple-50', color: '#ede7f6' }}
                                title="secondary.light"
                                dark
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox
                                bgcolor="secondary.200"
                                data={{ label: 'DeepPurple-200', color: '#b39ddb' }}
                                title="secondary[200]"
                                dark
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox
                                bgcolor="secondary.main"
                                data={{ label: 'DeepPurple-500', color: '#673ab7' }}
                                title="secondary.main"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox
                                bgcolor="secondary.dark"
                                data={{ label: 'DeepPurple-600', color: '#5e35b1' }}
                                title="secondary.dark"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="secondary.800" data={{ label: 'DeepPurple-800', color: '#4527a0' }} title="secondary[800]" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid> */}
            {/* <Grid item xs={12}>
                <SubCard title="Success Color">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="success.light" data={{ label: 'Green-A100', color: '#b9f6ca' }} title="success.light" dark />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="success.main" data={{ label: 'Green-A200', color: '#69f0ae' }} title="success[200]" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="success.main" data={{ label: 'Green-A400', color: '#69f0ae' }} title="success.main" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="success.dark" data={{ label: 'Green-A700', color: '#00c853' }} title="success.dark" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid> */}
            {/* <Grid item xs={12}>
                <SubCard title="Orange Color">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox
                                bgcolor="orange.light"
                                data={{ label: 'DeepOrange-50', color: '#fbe9e7' }}
                                title="orange.light"
                                dark
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="orange.main" data={{ label: 'DeepOrange-200', color: '#ffab91' }} title="orange.main" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="orange.dark" data={{ label: 'DeepOrange-800', color: '#d84315' }} title="orange.dark" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid> */}
            {/* <Grid item xs={12}>
                <SubCard title="Error Color">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="error.light" data={{ label: 'Red-50', color: '#ef9a9a' }} title="error.light" dark />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="error.main" data={{ label: 'Red-200', color: '#f44336' }} title="error.main" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="error.dark" data={{ label: 'Red-800', color: '#c62828' }} title="error.dark" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid> */}
            {/* <Grid item xs={12}>
                <SubCard title="Warning Color">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="warning.light" data={{ label: 'Amber-50', color: '#b9f6ca' }} title="warning.light" dark />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="warning.main" data={{ label: 'Amber-100', color: '#ffe57f' }} title="warning.main" dark />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="warning.dark" data={{ label: 'Amber-500', color: '#FFC107' }} title="warning.dark" />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid> */}
            {/* <Grid item xs={12}>
                <SubCard title="Grey Color">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="grey.50" data={{ label: 'Grey-50', color: '#fafafa' }} title="grey[50]" dark />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="grey.100" data={{ label: 'Grey-100', color: '#f5f5f5' }} title="grey[100]" dark />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="grey.200" data={{ label: 'Grey-200', color: '#eeeeee' }} title="grey[200]" dark />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="grey.300" data={{ label: 'Grey-300', color: '#e0e0e0' }} title="grey[300]" dark />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="grey.500" data={{ label: 'Grey-500', color: '#9e9e9e' }} title="grey[500]" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="grey.700" data={{ label: 'Grey-600', color: '#757575' }} title="grey[600]" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="grey.700" data={{ label: 'Grey-700', color: '#616161' }} title="grey[700]" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="grey.900" data={{ label: 'Grey-900', color: '#212121' }} title="grey[900]" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox bgcolor="#fff" data={{ label: 'Pure White', color: '#ffffff' }} title="Pure White" dark />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid> */}
        </Grid>
    </MainCard>
)};

export default TablerIcons;
