import React, { Component } from "react";
import PropTypes from "prop-types";
import Particles from "react-particles-js";

class Banner extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
    }

    render() {
        return (
            <React.Fragment>
                <div id="home">
                    <div className="main-banner item-bg-one">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <Particles />
                            </div>
                        </div>
                        <div className="animation-box1">
                            <img
                                src={this.props.animationImg1}
                                alt="sliderimage"
                            />
                        </div>
                        <div className="animation-box2">
                            <img
                                src={this.props.animationImg2}
                                alt="sliderimage"
                            />
                        </div>
                        <div className="animation-box3">
                            <img
                                src={this.props.animationImg3}
                                alt="sliderimage"
                            />
                        </div>
                        <div className="animation-box4">
                            <img
                                src={this.props.animationImg4}
                                alt="sliderimage"
                            />
                        </div>
                        <div className="animation-box6">
                            <img
                                src={this.props.animationImg5}
                                alt="sliderimage"
                            />
                        </div>
                        <div className="animation-box7">
                            <img
                                src={this.props.animationImg6}
                                className="rotateme"
                                alt="sliderimage"
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

Banner.propTypes = {
    animationImg1: PropTypes.string,
    animationImg2: PropTypes.string,
    animationImg3: PropTypes.string,
    animationImg4: PropTypes.string,
    animationImg5: PropTypes.string,
    animationImg6: PropTypes.string,
    BannerData: PropTypes.array
};

Banner.defaultProps = {
    animationImg1: require("../../img/1.png"),
    animationImg2: require("../../img/2.png"),
    animationImg3: require("../../img/1.png"),
    animationImg4: require("../../img/5.png"),
    animationImg5: require("../../img/6.png"),
    animationImg6: require("../../img/7.png")
};

export default Banner;
