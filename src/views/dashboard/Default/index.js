import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import PieCharts from '../PieChart';
// import AppCurrentVisits from './PieChart';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    const[number, setNumber] = useState('')
    useEffect(() => {
        setLoading(false);
    }, []);
    useEffect(()=>{
        async function getData(){
            try {
               const data = await fetch("https://reqres.in/api/users?page=2");
               console.log(data)
                setNumber(data)
            } catch (error) {
                console.log(error)
            }
        }

        getData()
    })
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container>
                    <Grid container spacing={gridSpacing}>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <EarningCard isLoading={isLoading} />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <TotalOrderLineChartCard isLoading={isLoading} />
                        </Grid>
                        <Grid item lg={6} sm={6} xs={12} md={6}>
                            <TotalGrowthBarChart isLoading={isLoading} />
                        </Grid>
                        <Grid item lg={6} md={6} xs={12} sm={6}>
                            <PieCharts isLoading={isLoading} />
                        </Grid>
                    </Grid>
                    {/* <AppCurrentVisits /> */}
                    {/* <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeLightCard isLoading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid> */}
                </Grid>
            </Grid>
            {/* <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={8} sm={6} xs={12} md={8}>
                        <TotalGrowthBarChart isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid> */}
        </Grid>
    );
};

export default Dashboard;
