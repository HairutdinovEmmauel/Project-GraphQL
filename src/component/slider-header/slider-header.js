import React from 'react';

import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    mainFeaturesPost: {
        position: "relative",
        color: theme.palette.common.white,
        marginTop: theme.spacing(8),
        marginButtom: theme.spacing(4),
        paddingTop: theme.spacing(25),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    mainFeaturesPostContent: {
        position: "relative",
        padding: theme.spacing(4)
    },
}));

const SliderHeader = () => {

    const classes = useStyles();

    return (
        <Paper className={classes.mainFeaturesPost}
            style={ {backgroundImage: 'url(https://www.cdc.gov/healthypets/images/slider/dog-and-cat.jpg)'} }>
            <Container fixed>
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturesPostContent}>
                            <Typography
                                component="h1"
                                variant="h4" 
                                color="inherit"
                                gutterBottom>
                                    The world of domestic animals
                            </Typography>
                            <Typography
                                variant="h6" 
                                color="inherit"
                                paragrahp>                    
                                    Join the world of pets, here you can find your favorite pets
                            </Typography>
                            <Button variant="contained" color="secondary">JOIN</Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
};

export default SliderHeader;