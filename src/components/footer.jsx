import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import clsx from 'clsx';
import SocialMedia from './SocialMedia';
import useCustomStyles from '../styles/customStyle';
import styles from '../styles/index';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const Footer = () => {
  const classes = useCustomStyles(styles);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        className={clsx(classes.layoutBackground)}
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" className={clsx(classes.lightText)}>
            souadelmansouri2018@gmail.com
          </Typography>
          <SocialMedia />
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
