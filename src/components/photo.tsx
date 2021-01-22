import { Grid, makeStyles } from "@material-ui/core";
import { Col } from "react-bootstrap";
interface Props {
  children: React.ReactNode;
  background: string;
  title?: string;
}
const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: "500px",
      overflow: "hidden",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      backgroundSize: "cover",
      backgroundPosition: "center",
      flexDirection: "column",
      textShadow: "1px 1px black",
      opacity: "0.85",

      "& div": {
        visibiltiy: "hidden",
        transition: "opacity 0s",
        opacity: "0",
        position: "absolute",
        height: "100%",
        padding: "2rem",
        backgroundColor: "#0000009c",
        justifyContent: "center",
        alignItems: "center",
        top: "0",
        zIndex: 9,
      },
      "& h2": {
        display: "block",
      },
      "&:hover": {
        opacity: "0.9",
        "& div": {
          display: "flex",
          visibility: "visible",
          opacity: "1",
          transition: "opacity 1s",
        },
        "& h2": {
          display: "none",
        },
      },
    },
  };
});
function Photo(props: Props): JSX.Element {
  const classes = useStyles();
  return (
    <Col
      md="4"
      className={classes.root}
      style={{ backgroundImage: `url("${props.background}")` }}
    >
      <h2>{props.title}</h2>
      <div>
        <p>{props.children}</p>
      </div>
    </Col>
  );
}

export default Photo;
