import { useState, useEffect } from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { apiURL } from "../../api/api";
import MicoLogo from "../../assets/images/post1.jpg"
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
export const CardBox = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`${apiURL}/users`)
            .then(res => setUsers(res.data))
    }, []);
    return (
        <div className="card-box" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap:'50px', padding: '50px'}}>
            {users && users.map((data) => (
                <Card sx={{ minWidth: 275 }} style={{boxShadow: '3px 3px 10px #aaa'}}>
                    <CardContent>
                        <img src={MicoLogo} alt="" />
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {data.name}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {data.surname}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {data.username}
                        </Typography>
                        <Typography variant="body2">
                       {data.address.city}
                            <br />
               
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}

