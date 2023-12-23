const mainStyles = (theme) => ({
  lightText: {
    color: theme.palette.secondary.light,
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  primaryTitle: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  secondaryTitle: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
  },
  layoutBackground: {
    backgroundColor: theme.palette.background.layout,
  },
  primaryBackground: {
    backgroundColor: theme.palette.background.default,
  },
  secondaryBackground: {
    backgroundColor: theme.palette.secondary.main,
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerPadding: {
    padding: '20px 0',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.third.main,
    margin: '0 10px',
    fontWeight: 'bold',
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'underline',
    },
  },
  logo: {
    fontWeight: 'extra-bold',
  },
  profile: {
    width: '100%',
    height: 'auto',
    borderRadius: '50%',
    border: `5px solid ${theme.palette.secondary.main}`,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  marginTop: {
    marginTop: '50px',
  },
  verticalyCenter: {
    alignItems: 'center',
  },
  devider: {
    width: '100px',
    height: '5px',
    borderRadius: '5px',
    backgroundColor: theme.palette.secondary.main,
  },
  borderContainer: {
    borderRadius: '50px',
    opacity: '0.8',
    backgroundColor: theme.palette.background.default,
  },
});

export default mainStyles;
