import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './SubjectHeading.css';
export default function SubjectHeading({ title, subject }) {
    return (
        <Card
            className="dream"
            sx={{
                backgroundSize: 'cover !important',
                margin: '25px 20px 50px 20px',
                background: `url("https://www.stockvault.net/data/2020/09/24/279149/preview16.jpg")`
            }}
        >
            <CardContent>
                <Typography className="subheading" gutterBottom variant="h4" component="div" color="white" sx={{ textAlign: 'left' }}>
                    {title}
                </Typography>
                <Typography className="subdescription" variant="h6" sx={{ color: 'gray', textAlign: 'left' }}>
                    {subject}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    sx={{
                        color: 'darkgray',
                        borderRadius: '24px',
                        minWidth: '200px',
                        minHeight: '40px',
                        backgroundColor: '#fff',
                        opacity: '80%',
                        margin: '0px 0px 2px 0px'
                    }}
                >
                    {' '}
                    choose your path
                </Button>
            </CardActions>
        </Card>
    );
}
