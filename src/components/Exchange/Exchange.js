import React, { useContext, useEffect } from "react";
import Layout from "../../layout/Layout";
import ExchangeContext from "../../context/exchange/exchangeContext";
import Spinner from "../../layout/Spinner";
import moment from "moment";
import Icofont from "react-icofont";

const Exchange = props => {
  const exchangeContext = useContext(ExchangeContext);

  const { exchanges, getExchanges } = exchangeContext;
  useEffect(() => {
    getExchanges();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const exchange = exchanges.find(
  //     exchange => exchange.id === props.match.params.id
  // );

  const exchange = {
    id: 300,
    coincap_id: "mxc",
    coincap_slug: null,
    coin_marketap_id: "544",
    name: "MXC",
    slug: "mxc",
    origin_country: null,
    image_url: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/544.png",
    operating_country: null,
    hacked: null,
    lending: null,
    margin_trading: null,
    negative_trading_fees: null,
    website: "https://www.mxc.ceo/",
    centralized: null,
    beginner_friendly: null,
    percent_total_volume: null,
    socket: null,
    volume_24hr_usd: null,
    coincap_updated_at: null,
    trading_pairs: null,
    instagram_url: null,
    twitter_url: "https://twitter.com/MXC_Exchange",
    linkedin_url: null,
    facebook_url: null,
    blog_url: "https://medium.com/@mxc.com",
    fee_url: "https://www.mxc.com/info/fee",
    chat_urls: ["https://t.me/MXCEnglish"],
    grade: null,
    rank: null,
    bg_hex: null,
    date_launched: "2018-04-07T00:00:00.000Z",
    first_historical_data: "2019-08-21T01:20:02.000Z",
    last_historical_data: "2019-11-14T09:00:01.000Z",
    data_quote_start: null,
    data_quote_end: null,
    data_orderbook_start: null,
    data_orderbook_end: null,
    data_trade_start: null,
    data_trade_end: null,
    notice: "",
    data_trade_count: null,
    data_symbols_count: null,
    description: "Launched in Apr 2018, MXC is a centralized exchange based in Singapore. It supports RMB deposits.",
    fees: null,
    created_at: "2019-11-14 09:19:38",
    updated_at: "2019-11-14 09:19:42"
  };
  console.log(exchange);
  if (!exchange) {
    return <Spinner />;
  } else {
    return (
      <Layout props={props}>
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="single-team">
                <img src={exchange.image_url} alt="team-img" />
                <div className="mt-5">
                  <ul className="">
                    <li>
                      <a href={exchange.facebook_url} target="__blank">
                        <Icofont icon="icofont-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href={exchange.instagram_url} target="__blank">
                        <Icofont icon="icofont-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href={exchange.twitter_url} target="__blank">
                        <Icofont icon="icofont-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href={exchange.linkedin_url} target="__blank">
                        <Icofont icon="icofont-linkedin" />
                      </a>
                    </li>
                  </ul>
                  <h3>{exchange.name}</h3>
                  <button className="btn btn-primary">
                    <a href={exchange.website} target="__blank">
                      Visit Website
                    </a>
                  </button>
                  <span>{exchange.profession}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <table class="table">
                  <tbody>
                    <tr>
                      <th scope="row">Rank</th>
                      <td>{exchange.rank}</td>
                    </tr>
                    <tr>
                      <th scope="row">Centralized</th>
                      <td>{exchange.centralized ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                      <th scope="row">Hacked</th>
                      <td>{exchange.hacked ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                      <th scope="row">Lending</th>
                      <td>{exchange.lending ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                      <th scope="row">Margin Trading</th>
                      <td>{exchange.margin_trading ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                      <th scope="row">Negative Trading Fees</th>
                      <td>{exchange.negative_trading_fees ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                      <th scope="row">Beginner Friendly</th>
                      <td>{exchange.beginner_friendly ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                      <th scope="row">Negative Trading Fees</th>
                      <td>{exchange.negative_trading_fees ? "Yes" : "No"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-sm-7">
                <table class="table">
                  <tbody>
                    <tr>
                      <th scope="row">Operating Country</th>
                      <td>{exchange.operating_country ? exchange.operating_country : ""}</td>
                    </tr>
                    <tr>
                      <th scope="row">Total Volume Percentage</th>
                      <td>{exchange.percent_total_volume ? exchange.percent_total_volume : ""}</td>
                    </tr>
                    <tr>
                      <th scope="row">Socket</th>
                      <td>{exchange.socket ? exchange.socket : ""}</td>
                    </tr>
                    <tr>
                      <th scope="row">Volume 24hr</th>
                      <td>{exchange.volume_24hr_usd ? exchange.volume_24hr_usd : ""}</td>
                    </tr>
                    <tr>
                      <th scope="row">Details on Fees</th>
                      <td>{exchange.fee_url ? exchange.fee_url : ""}</td>
                    </tr>
                    <tr>
                      <th scope="row">Date Launched</th>
                      <td>{exchange.date_launched ? moment(exchange.date_launched).format("Do MMM YY") : ""}</td>
                    </tr>
                    <tr>
                      <th scope="row">Beginner Friendly</th>
                      <td>{exchange.operating_country ? exchange.operating_country : ""}</td>
                    </tr>
                    <tr>
                      <th scope="row">Negative Trading Fees</th>
                      <td>{exchange.operating_country ? exchange.operating_country : ""}</td>
                    </tr>
                  </tbody>
                </table>
                <p>{exchange.description}</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};

export default Exchange;
