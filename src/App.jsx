import React from 'react'
import {Typography, AppBar,Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button} from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import useStyles from './styles';

const cards =  [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
    const classes = useStyles();
    return (
        <>
        <CssBaseline />
        <AppBar position='relative'>
            <Toolbar>
                <CodeIcon className={classes.icon}/>
                <Typography variant='h6'>
                    Material UI demo
                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div className={classes.container}>
                <Container maxWidth='sm'>
                    <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                        Header Text
                    </Typography>
                    <Typography variant='h6' align='center' color='textSecondary' paragraph>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, facere eligendi totam eaque accusamus natus magni et sapiente delectus aliquam enim nam eveniet quis at id, vero similique ad ab?
                    </Typography>
                    <div className={classes.button}>
                        <Grid container spacing={2} justify='center'>
                            <Grid item>
                                <Button variant='contained' color='primary'>Button</Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary'>Second Button</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth='md'>
                <Grid container spacing={4}>
                    {cards.map((card) =>(
                        <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia 
                                className={classes.cardMedia}
                                image={'https://source.unsplash.com/random/?' + card}
                                title='Image Title'
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom varinat='h5'>
                                    Heading
                                </Typography>
                                <Typography>
                                    This is description of all the thing on this card
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='small' color='primary'>View</Button>
                                <Button size='small' color='primary'>Edit</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    ))};
                </Grid>
            </Container>
        </main>
        <footer className={classes.footer}>
            <Typography variant='h6' align='center' gutterBottom>
                Footer
            </Typography>
            <Typography variant='subtitle1' align='center' color='textSecondary'>
                Some footer text or whatever
            </Typography>
        </footer>
        </>
    )
}

export default App
