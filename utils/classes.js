const classes = {
  section: {
    marginTop: 1,
    marginBottom: 1,
  },
  smallText: {
    fontSize: "15px"
  },
  button: {
    background: "rgb(230, 57, 70)",
    color: "rgb(241, 250, 238)",
    "&:hover": {
      background: "rgba(230, 57, 70, 0.9)",
    },
  },
  main: {
    marginTop: 2,
    minHeight: "80vh",
  },
  footer: {
    marginTop: 1,
    textAlign: "center",
  },
  appbar: {
    backgroundColor: "rgb(29, 53, 87)",
    "& a": {
      color: "rgb(241, 250, 238)",
      marginLeft: 1,
    },
  },
  toolbar: {
    justifyContent: "space-between",
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
};

export default classes;
