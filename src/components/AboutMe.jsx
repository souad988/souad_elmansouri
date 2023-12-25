/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import {
  Container, Grid, Typography,
} from '@mui/material';
import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import useCustomStyles from '../styles/customStyle';
import mainStyles from '../styles/index';
import styles from '../styles/components/aboutMe';

const AboutMe = () => {
  const classes = useCustomStyles(mainStyles);
  const localClasses = useCustomStyles(styles);
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  const leftItem = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };
  const rightItem = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <Container className={classes.horizontalCenter}>
      <Grid
        container
        spacing={2}
        className={clsx(
          localClasses.container,
          localClasses.containerAlign,
        )}
      >
        <Grid
          item
          xs={12}
          lg={6}
          md={6}
          component={motion.div}
          variants={container}
          initial="hidden"
          animate="show"

        >
          <Typography
            variant="h2"
            flexGrow={1}
            component={motion.div}
            gutterBottom
            className={clsx(classes.primaryTitle)}
            variants={leftItem}
            transition={{
              ease: 'linear',
              duration: 0.2,
              x: { duration: 3 },
            }}
          >
            Hey there. I’m Souad
            I’m a software developer
          </Typography>
          <Typography variant="h5" component="div" gutterBottom className={clsx(classes.text)}>
            I can help you build a product , feature or website Look through
            some of my work and experience!If you like what you see and have
            a project you need coded, don’t hestiate to contact me.
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          lg={3}
          md={3}
          className={clsx(classes.shaped, classes.boxShadow)}
          component={motion.div}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={rightItem}
            transition={{
              ease: 'linear',
              duration: 0.2,
              x: { duration: 3 },
            }}
          >
            <img src="souad_photo1.png" className={clsx(classes.profile, classes.boxShadow)} alt="profile" />
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;
