import React, { useState, useEffect } from 'react';
import Axios from 'axios';

//Navigation
import { Link } from 'react-router-dom';

//Styles Bootstrap
import { Container } from 'react-bootstrap';

//Components
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';

//Alert
import { toast } from 'react-toastify';

export default function Home(props) {
    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    const [listOfAnimes, setListOfAnimes] = useState([]);

    //Modal Update
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //Read Data
    useEffect(() => {
        Axios.get("http://localhost:3001/anime",)
            .then((response) => {
                setListOfAnimes(response.data)
            }).catch(() => {
        });
    });

    //Update Data
    const [newCurrentEpisode, setNewCurrentEpisode] = useState('');

    const updateToWatch = (id) => {
        Axios.put("http://localhost:3001/update",
        { id: id, newCurrentEpisode: newCurrentEpisode }
        ).then(() => {
            setListOfAnimes(listOfAnimes.map((value) => {
                return value._id == id ? { _id: id, name: value.name, } : value;
            }));
        }).catch(() => {
            toast.warning("Uy, it didn't work");
        })
    };

    //Delete Data
    const deleteToWatch = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
            setListOfAnimes(listOfAnimes.filter((val) => {
                return val._id != id;
            }));
            toast.error("Deleted");
        });
    };

    return (
        <Container>
            <Container fluid className="HomeContainer">
                <ThemeProvider theme={theme}>
                {/* Title */}
                <Typography variant="h2" component="h1" className="HomeTitle">Memoria</Typography>

                {/* Routes */}
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Button variant="contained" className="HomeRoutes HomeSeries">
                            <Typography variant="h5">Series</Typography>
                        </Button>
                    </Grid>
                </Grid>

                {listOfAnimes.map((value) => {
                    return (
                        <Container className="listContainer">
                            <Container className="listToWatch">
                                <Typography className="titleList" variant="h5">{value.name}</Typography>
                                <label className="itemList">Episodes: {value.episodes} </label>
                                <label className="itemList">Last watched:  {value.current_episode} </label>
                            </Container>

                            {/* Update */}
                            <EditIcon className="Icons" onClick={handleOpen} />
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                                >
                                <Box
                                    className= "ModalContainer"
                                    component="form"
                                    autoComplete="off"
                                    >
                                    <TextField
                                        className="updateInputs"
                                        name="newCurrentEpisode"
                                        type="number"
                                        label="Current Episode"
                                        InputLabelProps={{style: { color: 'white' }}}
                                        variant="filled"
                                        color="success"
                                        onChange={(event) => {setNewCurrentEpisode(event.target.value)}}
                                        isNumericString
                                    />
                                    {/* Button Add */}
                                    <Box className="AddContainerButton">
                                        <Button className="AddButton" onClick={() => {updateToWatch(value._id); handleClose();}}>
                                            <Typography style={{color: 'white'}}>Update</Typography>
                                        </Button>
                                    </Box>
                                </Box>
                            </Modal>
                            {/* Delete */}
                            <DeleteIcon onClick={() => {deleteToWatch(value._id)}} className="Icons" />
                        </Container>
                    )
                })}
                {/* Button Add */}
                <Link to="/addToWatch">
                <Box className="HomeContainerAdd">
                    <Button className="HomeAdd">
                        <Typography style={{color: 'black'}}>+ Add</Typography>
                    </Button>
                </Box>
                </Link>
                </ThemeProvider>
            </Container>
        </Container>
    )
}
