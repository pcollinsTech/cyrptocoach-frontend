import React from "react";
import bitcoin from "../../img/bitcoin.png";
import ethereum from "../../img/ethereum.png";
import litecoin from "../../img/litecoin.png";
const Welcome = () => {
    return (
        <React.Fragment>
            <section className="welcome-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>
                            Welcome to <b>Crypto Coach</b>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Porro modi voluptatem deserunt impedit.
                            Distinctio, commodi, quisquam illo tempore facilis
                            saepe vero atque officiis aut provident voluptates
                            natus soluta temporibus quia!
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-box">
                                <img src={bitcoin} alt="" />
                                <h3>Bitcoin</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Dolor voluptatem placeat
                                    veritatis, reprehenderit dolorem accusantium
                                    ea distinctio, eius quibusdam consequuntur
                                    omnis velit impedit nobis voluptas cum
                                    architecto maxime aliquid facilis.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-box">
                                <img src={ethereum} alt="" />
                                <h3>Ethereum</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Dolor voluptatem placeat
                                    veritatis, reprehenderit dolorem accusantium
                                    ea distinctio, eius quibusdam consequuntur
                                    omnis velit impedit nobis voluptas cum
                                    architecto maxime aliquid facilis.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-box">
                                <img src={litecoin} alt="" />
                                <h3>Litecoin</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Dolor voluptatem placeat
                                    veritatis, reprehenderit dolorem accusantium
                                    ea distinctio, eius quibusdam consequuntur
                                    omnis velit impedit nobis voluptas cum
                                    architecto maxime aliquid facilis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Welcome;
