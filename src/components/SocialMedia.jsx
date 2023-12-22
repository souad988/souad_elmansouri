import React from 'react';
import { Grid, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import clsx from 'clsx';
import styles from '../styles/components/socialMedia';
import useCustomStyles from '../styles/customStyle';

const SocialMedia = () => {
  const classes = useCustomStyles(styles);
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Link to="https://www.linkedin.com/in/abhishek-kumar-4b1b3b1b0/" className={clsx(classes.SocialMediaItem)}>
          <LinkedInIcon className={clsx(classes.SocialMediaItem)} />
        </Link>
      </Grid>
      <Grid item>
        <Link to="https://www.linkedin.com/in/abhishek-kumar-4b1b3b1b0/" className={clsx(classes.SocialMediaItem)}>
          <TwitterIcon className={clsx(classes.SocialMediaItem)} />
        </Link>
      </Grid>
      <Grid item>
        <Link to="https://www.linkedin.com/in/abhishek-kumar-4b1b3b1b0/" className={clsx(classes.SocialMediaItem)}>
          <GitHubIcon className={clsx(classes.SocialMediaItem)} />
        </Link>
      </Grid>
    </Grid>
  );
};

export default SocialMedia;
