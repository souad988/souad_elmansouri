const styles = (theme) => ({
  socialMediaItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50px',
    backgroundColor: '#f44336',
    color: theme.palette.primary.main,
    '& a': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      margin: '0 10px',
      '&:hover': {
        color: theme.palette.secondary.main,
        height: '60px',
      },
    },
  },
});

export default styles;
