import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
function Detail() {
    const id = useParams();
    const pr = id.id;
    const [staffs, setStaff] = useState([]);
    const baseUrl = `https://64994ec179fbe9bcf83ef4f0.mockapi.io/APIPE/`
    useEffect(() => {
        fetch(baseUrl + pr)
            .then(response => response.json())
            .then(data => setStaff(data))
            .catch(error => console.log(error.message));

    }, [id]);

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      });

    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 1200,
                flexGrow: 1,
                backgroundColor: 'rgba(180, 180, 180, 0.1)'
            }}
            key={staffs.id}
            style={{ boxShadow: '10px', marginTop: '60px', marginBottom: '50px', borderRadius: '20px' }}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 500, height: 500 }}>
                        <Img style={{ width: 500, height: 500, borderRadius: '20px' }} alt="complex" src={staffs.avatar} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid style={{ paddingTop: '120px' }} item xs>
                            <Typography style={{ textAlign: 'center', fontWeight: 'bold', color: 'red', fontSize: '30px' }} gutterBottom variant="subtitle1" component="div">
                                {staffs.name}
                            </Typography>
                            <Typography style={{ textAlign: 'left', fontSize: '20px', marginLeft: '40px' }} variant="body2" gutterBottom>
                                Age: {staffs.age}
                            </Typography>
                            <Typography style={{ textAlign: 'left', fontSize: '20px', marginLeft: '40px' }} variant="body3" gutterBottom>
                                Address: {staffs.address}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Detail