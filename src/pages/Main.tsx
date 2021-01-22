import { withStyles, Theme, createStyles } from "@material-ui/core/styles";

import Photo from "../components/photo";
import Update from "../components/update";
import React from "react";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getMainPage } from "../actions/main";
const styles = (theme: Theme) =>
  createStyles({
    mainImage: {
      width: "100%",
    },

    padding: {
      padding: "2rem 4rem",
      [theme.breakpoints.down("sm")]: {
        padding: "2rem",
      },
    },

    pictures: {
      backgroundColor: theme.palette.primary.dark,
      color: "white",
    },

    flex: {
      display: "flex",
      flexWrap: "wrap",
    },

    links: {
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
      textAlign: "center",
      "& img": {
        padding: "0 2rem",
        width: "150px",
        transition: "1s",
        opacity: "0.6",
      },
      "& img:hover": {
        opacity: "1",
      },
    },
  });
interface Props {
  classes: {
    mainImage: string;
    padding: string;
    pictures: string;
    flex: string;
    links: string;
  };
  getMainPage: Function;
}

interface State {
  data?: any;
}
class Main extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: undefined,
    };
  }

  componentDidMount(): void {
    // this.props.getMainPage().then((response: any) => {
    //   this.setState({ data: response });
    //   console.log(response);
    // });
  }
  render(): JSX.Element {
    const { classes } = this.props;
    return (
      <div>
        <>
          <img src={`/main.jpg`} alt="logo" className={classes.mainImage} />

          <h3 className={`${classes.padding}`}>
            We are a Spirit-filled, multicultural church in the City of Orange,
            CA. Disciples of Jesus Christ, in following Him we make disciples,
            as His people, God's family, we live this life to bring God glory,
            together.
          </h3>
          <div className={` ${classes.padding}`}>
            <h3>Updates</h3>
            <Row>
              <Update title="Test Title" date={new Date()} link="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sodales ligula iaculis ligula auctor consequat. Praesent
                consequat lorem vel mattis blandit. Donec dignissim, mauris non
                malesuada pellentesque, orci ex molestie quam, nec cursus sem
                risus id orci.
              </Update>
              <Update title="Test Title" date={new Date()} link="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sodales ligula iaculis ligula auctor consequat. Praesent
                consequat lorem vel mattis blandit. Donec dignissim, mauris non
                malesuada pellentesque, orci ex molestie quam, nec cursus sem
                risus id orci.
              </Update>
              <Update title="Test Title" date={new Date()} link="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                sodales ligula iaculis ligula auctor consequat. Praesent
                consequat lorem vel mattis blandit. Donec dignissim, mauris non
                malesuada pellentesque, orci ex molestie quam, nec cursus sem
                risus id orci.
              </Update>
            </Row>
          </div>
          <div
            className={`${classes.links} ${classes.padding}`}
            style={{ backgroundImage: `url("/joinus.jpg")` }}
          >
            <h3>Join Us Sunday At</h3>
            <h2>10:15 AM</h2>
            <h5>Click here to access our live stream Sunday morning service</h5>
            <div className="d-flex justify-content-center">
              <a href="#">
                <img src="/facebook.png" alt="facebook" />
              </a>
              <a href="#">
                <img src="/youtube.png" alt="facebook" />
              </a>
            </div>
          </div>

          <div className={` ${classes.padding}`}>
            <h3>What to Expect</h3>

            <p>
              Our Sunday morning service starts with a time of music where we
              worship Jesus and glorify Him. When prompted, we pray for the
              needs of people. Then there is a time to give, after which we
              teach a message from the Scripture. We end each service with an
              opportunity to respond to God's message of salvation. From there
              we close with communion also known as the Lord's Supper. Our hope
              is to lift up Jesus and to draw closer to Him.
            </p>
          </div>
          <div className={`${classes.pictures}`}>
            <Row>
              <Photo background="/3.jpg" title="The Trinity">
                We believe there is one God, eternally existing in three
                persons: God the Father, God the Son, God the Holy Spirit.
                (Deuteronomy 6:4; Matthew 29:19; Mark 12:29; John 5:17-30)
              </Photo>
              <Photo background="/1.jpg" title="Scripture">
                We believe the Bible, in its original text, is the inspired,
                infallible and authoritative word of God, inspired by God and
                given by God. The Scriptures are totally sufficient and must not
                be added to, superseded, or changed by later tradition, extra
                biblical revelation or worldly wisdom. (2 Timothy 3:15-16)
              </Photo>
              <Photo background="/2.jpg" title="Jesus Christ">
                We believe in the deity of our Lord Jesus Christ. In His virgin
                birth, in His sinless life, in His miracles and in His vicarious
                and atoning death. We believe in His bodily resurrection, in His
                ascension to the right hand of the Father, and His personal
                future return to the earth in power and glory to rule over the
                nations. (Isaiah 7:14; Hebrews 7:26; Acts 2:22; 1 Corinthians
                15:3; Acts 1:9-11)
              </Photo>
              <Photo background="/4.jpg" title="Communion and Water Baptism">
                We believe the ordinances of the church are the communion of the
                Lord's Supper and baptism in water by immersion in the name of
                the Father, the Son and the Holy Spirit. (Matthew 28:19; Romans
                6:4; 1 Corinthians 11:26; 2 Peter 1:4)
              </Photo>
              <Photo background="/5.jpg" title="Salvation">
                We believe man was created good and upright, but fell from that
                place of perfection into a condition of spiritual depravity and
                in the absolute necessity of regeneration by the Holy Spirit for
                salvation. This is because of the exceeding sinfulness of the
                human nature, and that all are justified on the single ground of
                faith in the shed blood of Jesus Christ. It is only by God's
                grace through faith alone that we are saved and at the time of
                salvation we are immediately justified and sanctified by faith.
                (John 3:16-19; John 5:24; Romans 3:23; Romans 5:8-9; Romans
                5:12-19; Ephesians 2:8-10; Titus 3:5)
              </Photo>
              <Photo background="/6.jpg" title="Eschatology">
                We believe in the second coming of Christ with His saints to
                rule and reign on the earth and in the resurrection of both the
                saved and the lost; those who are saved unto the resurrection of
                life and those who are not unto the resurrection of damnation.
                (Zechariah 14:5; Matthew 24:27; John 5:28-29; Revelation 19:20,
                20:11-15, 21:8)
              </Photo>
            </Row>
          </div>
        </>
      </div>
    );
  }
}

export default connect(null, {
  getMainPage,
})(withStyles(styles)(Main));
