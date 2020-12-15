import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    WelcomeMessageheadline: {
        marginTop: theme.spacing(5)
    },
    mainBUttons: {

    },
}));

const WelcomeMessage = () => {

    const classes = useStyles();

    return(
        <Container fixed >
            <Typography variant="h3" align="center" color="inherit">
                World of pets
            </Typography>
            <Typography 
                align="center" 
                color="textSecondary"
                gutterBottom>
                    Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                    galley of type and scrambled it to make a type specimen book.
            </Typography>
            <div className={classes.mainButtons}>
                <Grid container spacing={5} justify="center"> 
                    <Grid item>
                        <Button variant="contained" color="primary" >START NOW</Button>
                    </Grid>
                    <Grid item >
                        <Button variant="outlined" color="primary" >LEARN MORE</Button>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}

export default WelcomeMessage;