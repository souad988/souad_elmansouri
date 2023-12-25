const mainStyles = (theme) => ({
  lightText: {
    color: theme.palette.secondary.light,
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  primaryTitle: {
    backgroundImage: `linear-gradient(110deg, ${theme.palette.headline.secondary}, ${theme.palette.headline.main})`,
    backgroundClip: 'text',
    WebkitTextFillColor: 'rgba(0, 0, 0, 0)',
    WebkitBoxDecorationBreak: 'clone',
    fontWeight: 'bold',
    fontFamily: theme.fonts.headline,
  },
  secondaryTitle: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
  },
  text: {
    color: theme.palette.text.secondary,
    fontFamily: theme.fonts.headline,
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
    fontFamily: theme.fonts.headline,
    fontWeight: 'bold',
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'underline',
    },
  },
  logo: {
    fontWeight: 'extra-bold',
    color: theme.palette.secondary.main,
    fontFamily: theme.fonts.headline,
  },
  profile: {
    width: '100%',
    height: 'auto',
    borderRadius: '50%',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceEvenly: {
    justifyContent: 'space-evenly',
  },
  marginTop: {
    marginTop: '50px',
  },
  sectionVerticalMargin: {
    margin: '20vh auto',
  },
  verticalyCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  horizontalCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
  devider: {
    width: '200px',
    height: '4px',
    borderRadius: '5px',
    backgroundColor: `linear-gradient(110deg, ${theme.palette.headline.secondary}, ${theme.palette.headline.main})`,
  },
  borderContainer: {
    background: theme.palette.primary.main,
    backdropFilter: 'blur(10px)',
    borderRadius: '50px',
    border: '1px solid rgba(43, 43, 43, 0.568)',
  },
  boxShadow: {
    boxShadow: `0px 0px 10px 0px ${theme.palette.secondary.main}`,
  },
  leftCropedContainer: {
    clipPath: 'polygon(100% 10%,100% 100%, 0% 100%,0% 0%)',
    padding: '8em 20%',
    minHeight: '80vh',
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down('511')]: {
      padding: '1em 5%',
      clipPath: 'polygon(100% 5%,100% 100%, 0% 100%,0% 0%)',
    },
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shaped: {
    borderRadius: '60px 20px 60px 20px',
  },
});

export default mainStyles;
