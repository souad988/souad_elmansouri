import { Box } from '@mui/material';
import React from 'react';
import clsx from 'clsx';
import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';
import Projects from './projects';
import SocialMedia from '../components/SocialMedia';
import useCustomStyles from '../styles/customStyle';
import mainStyles from '../styles';

function Main() {
  const classes = useCustomStyles(mainStyles);
  return (
    <Box>
      <AboutMe />
      <SocialMedia />
      <hr className={clsx(classes.devider, classes.primaryTitle)} />
      <Projects />
      <ContactMe />
    </Box>
  );
}

export default Main;
