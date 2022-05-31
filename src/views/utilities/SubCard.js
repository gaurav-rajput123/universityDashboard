import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './SubCard.css';

export default function SubCard({ data }) {
    return (
        <Card
            className="carde"
            sx={{
                minWidth: 200,
                minHeight: 220,
                background: `url("${data.image}") !important`,
                display: 'inline-flex',
                flexDirection: 'column',
                backgroundSize: 'cover !important'
            }}
        >
            <CardContent>
                <Typography
                    sx={{
                        color: 'black',
                        fontWeight: '500',
                        fontSize: '18px'
                    }}
                ></Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center', flexGrow: 1, flexDirection: 'column-reverse' }}>
                <Button
                    className="button"
                    size="small"
                    sx={{
                        borderRadius: '24px',
                        minWidth: '250px',
                        minHeight: '50px',
                        backgroundColor: 'transparent',
                        opacity: '80%',
                        color: 'white'
                    }}
                >
                    Learn More
                </Button>
                <div style={{ flexGrow: 1 }}></div>
            </CardActions>
        </Card>
    );
}
