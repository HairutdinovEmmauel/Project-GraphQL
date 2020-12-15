import React from 'react';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import makeStyles from '@material-ui/core/styles/makeStyles';

import { useQueryAllPets } from './bus/hooks/useQueryAllPets';

const useStyles = makeStyles((theme) => ({
    listPets: {
        marginTop: theme.spacing(8)
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1
    },
}));

const ListPets = () => {

    const classes = useStyles();

    const { loading, error, pets } = useQueryAllPets();

    if(loading) {
        return <p>loading...</p>
    }

    if(error) {
        return <p>ERROR!</p>
    }

    return (
        <div>
            <Container fixed>
                <Grid container spacing={4}>
                    { pets.map(({ id, name, photo, __typename, weight }) => {
                        return(
                            <Grid item key={id} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia 
                                        className={classes.cardMedia}
                                        image={photo.full}
                                        title="Title image" />
                                    <CardContent className={classes.CardContent}>
                                        <Typography variant="h5" gutterBottom>
                                            Name {name}
                                        </Typography>
                                        <Typography>
                                            { __typename }
                                        </Typography>
                                        <Typography>
                                            Id: { id }
                                        </Typography>
                                        <Typography>
                                            Weight: { weight }
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );  
                    }) }
                </Grid>
            </Container>
        </div>
             
    );
}

export default ListPets;