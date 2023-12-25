const styles = (theme) => ({
  containerAlign: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-evenly',
      alignItems: 'space-between',
    },
    alignItems: 'center',
  },
  container: {
    margin: '20vh auto 2vh auto',
    width: '80%',
    [theme.breakpoints.up('md')]: {
      width: '90%',
      margin: '20vh auto',
    },
  },
});

export default styles;
