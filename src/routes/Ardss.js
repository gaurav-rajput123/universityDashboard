import React from "react";
import Typography from '@mui/material/Typography';
import { Paper, Grid } from "@mui/material";
// import logo from '../KL.png';
import './Ardss.css';
import logo from './mlogo.png';



export default function Ardss() {
    return (

        <Grid container direction="column" className="mrsloginpage" sx={{ background: "#06213F", height: "100%", padding: '15% 0 0 15%' }}>
            <Grid item sx={{ margin: '10% 0 0 0' }}>
                <a href="https://mrsptuonline.com"><img src={logo} alt="as" style={{
                    position: "unset",
                    top: 0,
                    bottom: 0,
                    margin: '0 0 5% -10%',
                    padding: "0px",
                    height: "fit-content",
                    width: "110%"

                }} />
                </a>
                <Typography alignSelf="center" color={"white"} fontWeight={"bold"} fontSize={"50px"} fontFamily={"'Poppins', sans-serif"}>
                    MRSPTU Online<br />
                    University<br />
                    Dashboard
                </Typography>
            </Grid>
            {/* </Grid>
    <Grid item lg={2} />
    <Grid item alignSelf="center"> */}

        </Grid>
    );
}


