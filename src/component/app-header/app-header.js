import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';  
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import MenuIcon from '@material-ui/icons/Menu';

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
}));

const AppHeader = () => {

    const classes = useStyles();

    return(
        <>
            <AppBar position="fixed" classes={classes.appHeader}>
                <Container fixed>
                    <Toolbar>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>Web Developer</Typography>
                        <Box mr={3}>
                            <Button 
                                color="inherit" 
                                variant="outlined" 
                                className={classes.menuButton}>
                                    LOG IN
                            </Button>
                        </Box>
                        <Box mr={3}>
                            <Button 
                                color="secondary" 
                                variant="contained" > 
                                    SING UP
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
};

export default AppHeader;