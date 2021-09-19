import { Button, makeStyles, Theme, Add } from "../styles/material-ui";

const FooterButton = ({ buttonText }) => {
  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      margin: "0 10vw",
    },
    footerButton: {
      width: "20%",
    },
    section: {
      marginLeft: "6%",
      width: "88%",
      border: "1px dashed #1769aa",
      padding: "30px 0 30px 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.section}>
        <Button
          color="primary"
          variant="outlined"
          className={classes.footerButton}
          startIcon={<Add />}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default FooterButton;
