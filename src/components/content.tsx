import { makeStyles } from "@material-ui/core";
interface Props {
  children: React.ReactNode;
}
const useStyles = makeStyles((theme) => {
  return {
    root: {
      minHeight: "calc(100vh - 244px)",
      margin: "auto",
    },
  };
});
function Content(props: Props): JSX.Element {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
}

export default Content;
