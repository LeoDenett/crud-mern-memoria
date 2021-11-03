import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="AppBar">
            <Toolbar>
            {/* Title */}
            <Typography variant="h6" style={{padding: '12px', textAlign: 'center'}} component="div" sx={{ flexGrow: 1 }}>
                Memoria
            </Typography>
            </Toolbar>
        </AppBar>
        </Box>
    )
}
