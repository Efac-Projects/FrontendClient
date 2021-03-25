import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
      },
      heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
      },
      heroButtons: {
        marginTop: theme.spacing(4),
      },
        
    }));

export default function ProfileItemTop() {
    const classes = useStyles();

    return (
        <div>
         <Box mt={5}></Box>
        <Typography
                  component='h1'
                  variant='h2'
                  align='center'
                  color='textPrimary'
                 
                >
                  Find your Doctor
                </Typography>

                <Typography
                  variant='h5'
                  align='center'
                  color='textSecondary'
                  paragraph
                >
                  Best way to connect with your Doctor. <br /> No more
                  waiting Queues.
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justify='center'>
                    <Grid item>
                      <Button
                      variant='contained'
                      color='primary'
                      href="map"
                      >
                      Find Location     
                      </Button>

                    </Grid>
                    <Grid item>
                      <Button
                        variant='outlined'
                        color='primary'
                        href="contactus"
                      >
                        Contact Us
                      </Button> </Grid></Grid></div>

        </div>
    )
}
