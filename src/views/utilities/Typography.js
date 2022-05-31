import { Grid, Link } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { DataGrid } from '@mui/x-data-grid';
// ==============================|| TYPOGRAPHY ||============================== //

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 70
    },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 130
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 130
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`
    }
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
];

const Typography = () => (
    <MainCard title="Student Status" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={12}>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
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
);

export default Typography;
