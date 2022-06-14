import { Grid, Link } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { DataGrid } from '@mui/x-data-grid';
import { useContext, useEffect, useState } from 'react';
import { countContext } from 'index';
import axios from 'axios';
// ==============================|| TYPOGRAPHY ||============================== //

const columns = [
    {
        field: 'userId',
        headerName: 'user',
        width: 350
    },
    // {
    //     field: 'coursename',
    //     headerName: 'Course Name',
    //     width: 350
    // },
    {
        field: 'id',
        headerName: 'Course Id',
        width: 350
    },
];

// const rows = [
//     { id: 1, lastName: 'Bahadur', firstName: 'Vikram', age: 35 },
//     { id: 2, lastName: 'Mandhan', firstName: 'Sohit', age: 42 },
//     { id: 3, lastName: 'Rajput', firstName: 'Gaurav', age: 45 },
//     { id: 4, lastName: 'Sharma', firstName: 'Vineet', age: 16 },
//     { id: 5, lastName: 'Kumar', firstName: 'Prashant', age: 56 },
//     { id: 6, lastName: 'Sandhu', firstName: 'Balkar', age: 150 },
//     { id: 7, lastName: 'Kumar', firstName: 'Ankit', age: 44 },
//     { id: 8, lastName: 'Panwar', firstName: 'Ankur', age: 36 },
//     { id: 9, lastName: 'Bahadur', firstName: 'Vikas', age: 65 }
// ];

const Typography = () => {
    let context = useContext(countContext)

    const [rows, setRow] = useState([])
    useEffect(()=>{
        async function getTeachers () {
            try {
                const callRes = await axios({
                    url: "https://api.keewesolutions.com/university/paymentlist", method: 'GET'
                })
                const dataRowArr = callRes.data.response.map((item)=>{
                    return{
                        id: item.courseId,
                        userId: item.userId
                }
            })
               

                // let dataobj = {}
                // const courseIdArray = []
                // for(let item of callRes.data.response){
                //     dataobj[item.courseId] = item.id
                //     courseIdArray.push(item.courseId)
                // }

                // const courseDataResponse = await axios({
                //     url: "https://lmsapi.keewesolutions.com/db/fetchcoursedatawp",
                //     method: 'POST',
                //     data: {
                //         courseIds: courseIdArray
                //     }
                // })
                // console.log(courseDataResponse)
                // let finalObj = {

                // }
                // console.log(courseDataResponse.data.data)
                // for(let item of courseDataResponse.data.data){
                //     let userId1 = dataobj[item.id]
                //     finalObj[userId1] = item.courseDetails.title
                // }
                // console.log(finalObj)

                // const dataRowArr = callRes.data.response.map((item)=>{
                //     return {
                //         userId: item.userId,
                //         courseId: item.courseId,
                //         // coursename: finalObj[item.id],
                //          id: item.id + item.courseId
                //     }
                // })



                console.log(dataRowArr)
                setRow(dataRowArr)
            } catch (error) {
                console.log(error)
            }
        }
        getTeachers()
    },[])
    return (

    <MainCard title="Student Status" 
    secondary={function(){
        return (
            <>
            <span>Total Students :{context.studentCount}</span> 
            </>
        )
    }()
    }
    >
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={12}>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[39]} checkboxSelection />
                </div>
                {/* <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <MuiTypography variant="h1" gutterBottom>
                                h1. Heading
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="h2" gutterBottom>
                                h2. Heading
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="h3" gutterBottom>
                                h3. Heading
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="h4" gutterBottom>
                                h4. Heading
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="h5" gutterBottom>
                                h5. Heading
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="h6" gutterBottom>
                                h6. Heading
                            </MuiTypography>
                        </Grid>
                    </Grid> */}
            </Grid>
            {/* <Grid item xs={12} sm={6}>
                <SubCard title="Sub title">
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <MuiTypography variant="subtitle1" gutterBottom>
                                subtitle1. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="subtitle2" gutterBottom>
                                subtitle2. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur
                            </MuiTypography>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid> */}
            {/* <Grid item xs={12} sm={6}>
                <SubCard title="Body">
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <MuiTypography variant="body1" gutterBottom>
                                body1. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur unde suscipit, quam
                                beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
                                Eum quasi quidem quibusdam.
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="body2" gutterBottom>
                                body2. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos blanditiis tenetur unde suscipit, quam
                                beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
                                Eum quasi quidem quibusdam.
                            </MuiTypography>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid> */}
            {/* <Grid item xs={12} sm={6}>
                <SubCard title="Extra">
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <MuiTypography variant="button" display="block" gutterBottom>
                                button text
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="caption" display="block" gutterBottom>
                                caption text
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography variant="overline" display="block" gutterBottom>
                                overline text
                            </MuiTypography>
                        </Grid>
                        <Grid item>
                            <MuiTypography
                                variant="body2"
                                color="primary"
                                component={Link}
                                href="https://berrydashboard.io"
                                target="_blank"
                                display="block"
                                underline="hover"
                                gutterBottom
                            >
                                https://berrydashboard.io
                            </MuiTypography>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid> */}
        </Grid>
    </MainCard>
)};

export default Typography;
