import React, { useState } from 'react';
import Axios from 'axios';

//Navigation
import { Link, useHistory } from 'react-router-dom'

//MUI Components
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//Bootstrap
import { Container } from 'react-bootstrap';

//Alert
import { toast } from 'react-toastify';

export default function AddAnime() {
    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    const [name, setName] = useState('');
    const [episodes, setEpisodes] = useState('');
    const [currentEpisode, setCurrentEpisode] = useState('');

    const [listOfAnimes, setListOfAnimes] = useState([]);

    const history = useHistory()

    const addToWatch = (e) => {
        Axios.post("http://localhost:3001/addToWatch",
            {name: name, episodes: episodes, currentEpisode: currentEpisode})
            .then(() => {
                setListOfAnimes([...listOfAnimes, {name: name, episodes: episodes, currentEpisode: currentEpisode}]);
                toast.success('Hey, it worked');
                history.push('/');
            }).catch(() => {
                toast.warning("Uy, it didn't work");
            })
    }

    return (
        <Container>
            <Container fluid className="HomeContainer" style={{flexDirection: 'column'}}>
                <ThemeProvider theme={theme}>
                <Typography component="h1" variant="h1" style={{textAlign: 'center'}}>Add to list</Typography>
                <Link className="LinkHome" to="/">Home</Link>
                    <Box
                        className= "AddContainer"
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        autoComplete="off"
                        >
                        <TextField
                            style={{width: '80%', marginLeft: 0}}
                            type="text"
                            label="Name"
                            name="name"
                            InputLabelProps={{style: { color: 'green' }}}
                            variant="filled"
                            color="success"
                            onChange={(event) => {setName(event.target.value)}}
                        />
                        <TextField
                            style={{width: '80%', marginLeft: 0}}
                            type="number"
                            name="episodes"
                            label="Episodes"
                            InputLabelProps={{style: { color: 'green' }}}
                            variant="filled"
                            color="success"
                            onChange={(event) => {setEpisodes(event.target.value)}}
                            isNumericString
                        />
                        <TextField
                            style={{width: '80%', marginLeft: 0}}
                            type="number"
                            name="currentEpisode"
                            label="Current Episode"
                            InputLabelProps={{style: { color: 'green'}}}
                            variant="filled"
                            color="success"
                            onChange={(event) => {setCurrentEpisode(event.target.value)}}
                            isNumericString
                        />

                        {/* Button Add */}
                        <Box className="AddContainerButton">
                            <Button className="AddButton" onClick={addToWatch}>
                                <Typography style={{color: 'white'}}>+ Add</Typography>
                            </Button>
                        </Box>
                    </Box>
                </ThemeProvider>
            </Container>
        </Container>
    )
}
