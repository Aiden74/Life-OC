import { Button, makeStyles } from "@material-ui/core";
import { Col } from "react-bootstrap";
interface Props {
  children: React.ReactNode;
  date: Date;
  title: string;
  link: string;
}
const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      textAlign: "center",
      alignItems: "center",
      padding: "2rem",
      flexDirection: "column",
    },
    title: {
      color: theme.palette.primary.main,
    },
  };
});
function Update(props: Props): JSX.Element {
  const classes = useStyles();
  return (
    <Col md="4" className={classes.root}>
      <h4 className={classes.title}>{props.title}</h4>
      <div>
        <p>{props.children}</p>
        <a href={props.link}>
          <Button variant="contained" color="secondary">
            Read More
          </Button>
        </a>
      </div>
    </Col>
  );
}

export default Update;
