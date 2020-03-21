import React from "react";
import PropTypes from "prop-types";
import homeBanner from "../../images/homeBanner.jpg";

const Banner = () => {
  return (
    <React.Fragment>
      <div id="home">
        <div className="main-banner item-bg-one">
          <h3>Simplifying Cryptocurrency</h3>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos voluptate minus autem, consectetur eum, laboriosam ipsa eveniet
            ullam quae nesciunt officiis et doloremque aliquam aperiam ea laudantium, doloribus consequuntur vel!
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

Banner.propTypes = {
  animationImg1: PropTypes.string
};

export default Banner;
