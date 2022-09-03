import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";
import { Animated } from "react-animated-css";


const useStyles = makeStyles(() => ({
    banner: {
        backgroundImage: "url(./cb.jpg)",
    },
    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
    }
}));

const Banner = () => {
    const classes = useStyles();
    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
                <div className={classes.tagline}>
                    <Typography
                        variant="h2"
                        style={{
                            fontWeight: "bold",
                            marginBottom: 15,
                            fontFamily: "Montserrat",
                        }}
                    >
                        Crypto-Base
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        style={{
                            color: "darkgrey",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat",
                        }}
                    >
                        Get All The Info Regarding Your Favorite Crypto Currency
                    </Typography>
                </div>
                    </Animated>
                <Carousel />
            </Container>
        </div>
    );
};

export default Banner;
