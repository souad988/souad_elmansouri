/* eslint-disable react/no-array-index-key */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import clsx from 'clsx';
import ProjectCard from '../components/projectCard';
import useCustomStyles from '../styles/customStyle';
import mainStyles from '../styles';
import projectsDetail from '../store/projects';

function Projects() {
  const classes = useCustomStyles(mainStyles);
  return (
    <Grid
      container
      className={clsx(classes.spaceBetween, classes.marginTop, classes.verticalyCenter)}
    >
      <Typography
        variant="h2"
        flexGrow={1}
        component="div"
        gutterBottom
        className={clsx(classes.primaryTitle)}
      >
        Projects
      </Typography>
      <Grid
        container
        spacing={2}
      >

        {projectsDetail.map((item, index) => (
          <Grid item xs={12} key={`item-${index}`} lg={4} md={6}>
            <ProjectCard project={item} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Projects;
