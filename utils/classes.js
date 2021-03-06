const classes = {
  section: {
    marginTop: 1,
    marginBottom: 1,
  },
  smallText: {
    fontSize: "15px",
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
  navbarButton: {
    color: "#fff",
    textTransform: "initial",
  },
  fullWidth: {
    width: "100%",
  },
  sort: {
    marginRight: 1,
  },
  visible: {
    display: "initial",
  },
  hidden: {
    display: "none",
  },
  searchForm: {
    border: "1px solid #fff",
    backgroundColor: "#fff",
    borderRadius: 1,
  },
  searchInput: {
    paddingLeft: 1,
    color: "#000",
    "& ::placeholder": {
      color: "#606060",
    },
  },
  searchButton: {
    backgroundColor: "#f8c040",
    padding: 1,
    borderRadius: "0 5px 5px 0",
    "& span": {
      color: "#000",
    },
  },
};

export default classes;
