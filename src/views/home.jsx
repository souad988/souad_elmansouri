import React from 'react';
import { Grid } from '@material-ui/core';
import Footer from '../components/footer';
import Header from '../components/header';
import ProjectCard from '../components/projectCard';

function Home() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <ProjectCard />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default Home;
