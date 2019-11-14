import React, { Component } from 'react'
// import axios from 'axios';


class CointItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coin: this.props.coin,
            coinInfo: {}
        }
    }

    componentDidMount() {
        // return axios
        //     .get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=${this.props.coin.symbol}`)
        //     .then( res => {
        //         console.log("CoinItme", res.data);
        //         return this.setState({
        //             ...this.state,
        //             coinInfo: res.data
        //         })
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })

    }
  render() {
      const {
        id,
        name,
        symbol,
        circulating_supply,
        total_supply,
        max_supply,
        // slug,
        // date_added,
        // num_market_pairs,
        cmc_rank,
        // last_updated,
        quote:{
            USD: {
                price,
                volume_24h,
                // percent_change_1h,
                percent_change_24h,
                // percent_change_7d,
                market_cap,
            }
        }
      } = this.state.coin;
      let price_usd = parseFloat(price).toFixed(2);
      let volume = parseFloat(volume_24h).toFixed(2);
      let marketCap = parseFloat(market_cap).toFixed(2);
      let percentage = parseFloat(percent_change_24h).toFixed(2);
      return (
          <tr key={id}>
              <th scope="row">{cmc_rank}</th>
              <td>{name}</td>
              <td>{symbol}</td>
              <td>{price_usd}</td>
              <td>{max_supply}</td>
              <td>{volume}</td>
              <td>{marketCap}</td>
              <td>{circulating_supply}</td>
              <td>{total_supply}</td>
              <td>{percentage}%</td>
          </tr>
      );
  }
}

export default CointItem
