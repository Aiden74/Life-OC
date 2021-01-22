import { makeStyles } from "@material-ui/core/styles";
import { Nav, Navbar } from "react-bootstrap";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

import Content from "../components/content";
const useStyles = makeStyles((theme) => {
  return {
    nav: {
      padding: "0",
      backgroundColor: `${theme.palette.primary.main} !important`,
    },
    icon: {
      margin: "0",
      width: "120px",
      height: "auto",
      marginLeft: "1rem",
      marginRight: "1rem",
      [theme.breakpoints.down("sm")]: {
        width: "80px",
      },
    },
    footer: {
      padding: "2rem",
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.light,
      "& img": {
        widht: "100%",
        maxWidth: "150px",
        float: "left",
      },
      "& img:hover": {
        opacity: "1",
      },
      "& p": {
        marginBottom: "5px !important",
        fontSize: "16px",
      },
    },
  };
});

interface Props {
  children: React.ReactNode;
}
function Layout(props: Props) {
  const classes = useStyles();
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className={classes.nav}
      >
        <Navbar.Brand href="#home">
          <img alt="logo" src="/logo.png" className={classes.icon} />
          Life Church
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">About Us</Nav.Link>
            <Nav.Link href="/">Ministries</Nav.Link>
            <Nav.Link href="/">Prayer Requests</Nav.Link>
            <Nav.Link href="/">Online Giving</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Content>{props.children}</Content>
      <Row className={classes.footer}>
        <Col md="2">
          <img src="./logo.png" alt="logo" />
        </Col>
        <Col md="5">
          <p>3524 E Chapman Ave Orange CA 92869</p>
          <p> Phone: (714) 771-2522</p> <p>Fax: (714) 771-1905</p>
          <p>Email: info@lifeoc.org</p>
        </Col>
      </Row>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
