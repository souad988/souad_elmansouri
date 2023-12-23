import { Container } from '@mui/material';
import React from 'react';
import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';
import Projects from './projects';
import SocialMedia from '../components/SocialMedia';
import useCustomStyles from '../styles/customStyle';
import mainStyles from '../styles';

function Main() {
  const classes = useCustomStyles(mainStyles);
  return (
    <Container>
      <AboutMe />
      <SocialMedia />
      <hr className={classes.devider} />
      <Projects />
      <ContactMe />
    </Container>
  );
}

export default Main;
