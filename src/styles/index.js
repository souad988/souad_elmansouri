const styles = (theme) => ({
  lightText: {
    color: theme.palette.secondary.light,
    fontSize: '1rem',
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
    backgroundColor: theme.background.default,
  },
  secondaryBackground: {
    backgroundColor: theme.palette.secondary.main,
  },
});

export default styles;
