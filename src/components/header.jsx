import { Grid, Typography } from '@mui/material';
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import clsx from 'clsx';
import useCustomStyles from '../styles/customStyle';
import mainStyles from '../styles';

function Header() {
  const classes = useCustomStyles(mainStyles);
  return (
    <Grid container className={clsx(classes.layoutBackground, classes.containerPadding)}>
      <Grid item xs={4}>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} className={clsx(classes.primaryTitle, classes.logo)}>
          Souad El Mansouri
        </Typography>
      </Grid>
      <Grid justifyContent="center" alignItems="center" display='flex' item xs={8}>
        <Grid container justifyContent="center" className={clsx(classes.borderContainer)} width={'60%'} >
          <Link to="/main#aboutme" className={clsx(classes.link)}>
            About
          </Link>
          <Link to="/main#projects" className={clsx(classes.link)}>
            Projects
          </Link>
          <Link to="/main#contactme" className={clsx(classes.link)}>
            Contact
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Header;
