const mainStyles = (theme) => ({
  lightText: {
    color: theme.palette.secondary.light,
    fontWeight: 'bold',
  },
  primaryTitle: {
    color: theme.palette.primary.main,
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  secondaryTitle: {
    color: theme.palette.secondary.main,
    fontSize: '1.5rem',
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
});

export default mainStyles;
