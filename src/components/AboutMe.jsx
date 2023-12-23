/* eslint-disable max-len */
import {
  Box, Grid, Typography,
} from '@mui/material';
import React from 'react';
import clsx from 'clsx';
import useCustomStyles from '../styles/customStyle';
import mainStyles from '../styles/index';

const AboutMe = () => {
  const classes = useCustomStyles(mainStyles);
  return (
    <Box>
      <Grid container spacing={2} className={clsx(classes.spaceBetween, classes.marginTop, classes.verticalyCenter)}>
        <Grid item xs={12} lg={7} md={7}>
          <Typography variant="h2" flexGrow={1} component="div" gutterBottom className={clsx(classes.primaryTitle)}>
            Hey there. I’m Souad
            I’m a software developer
          </Typography>
          <Typography variant="h5" component="div" gutterBottom className={clsx(classes.secondaryTitle)}>
            I can help you build a product , feature or website Look through
            some of my work and experience!If you like what you see and have
            a project you need coded, don’t hestiate to contact me.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={4} md={4}>
          <img src="souad_photo1.png" className={classes.profile} alt="profile" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
