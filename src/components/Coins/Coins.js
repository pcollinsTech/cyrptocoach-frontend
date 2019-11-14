import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import CoinItem  from './CoinItem'



const COINS_QUERY = gql`
    query CoinsQuery {
        coins{
            id
            name
            symbol
            circulating_supply
            total_supply
            max_supply
            slug
            date_added
            num_market_pairs
            cmc_rank
            last_updated
            quote{
                USD {
                    price
                    volume_24h
                    percent_change_1h
                    percent_change_24h
                    percent_change_7d
                    market_cap
                    last_updated
                }
            }
        }
    }
`;

export class Coins extends Component {
    constructor(props) {
        super(props)
        this.state={
            // currencyList: countries.default,
            currency: "",
            data: ""
        }
    }
    onSort(event, sortKey){
        event.preventDefault()
        const sortData = this.state.data;
        console.log("THIS IS THE DATA", this.state.data)
        sortData.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
        this.setState({...this.state, data:sortData})
    }
    render() {
        console.log("YOOOO", this.state)
        return (
            <Fragment>
                <h1 className="display-4 my-3">Coins</h1>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col" onClick={e => this.onSort(e, 'cmc_rank')}>Rank</th>
                            <th scope="col" onClick={e => this.onSort(e, 'name')}>Name</th>
                            <th scope="col" onClick={e => this.onSort(e, 'symbol')}>Symbol</th>
                            <th scope="col" onClick={e => this.onSort(e, 'price_usd')}>Price ($)</th>
                            <th scope="col" onClick={e => this.onSort(e, 'max_supply')}>Max Supply</th>
                            <th scope="col" onClick={e => this.onSort(e, 'volume_24h')}>24hr Trading Volume</th>
                            <th scope="col" onClick={e => this.onSort(e, 'market_cap')}>Market Cap USD</th>
                            <th scope="col" onClick={e => this.onSort(e, 'circulating_supply')}>Available Supply</th>
                            <th scope="col" onClick={e => this.onSort(e, 'total_supply')}>Total Supply</th>
                            <th scope="col" onClick={e => this.onSort(e, 'percent_change_24h')}>24hr percenage change</th>
                        </tr>
                    </thead>
                    
                        <Query query={COINS_QUERY}>
                            {({ loading, error, data }) => {
                                console.log("data",data)

                                if (loading) return 'Loading' ;
                                if (error) console.log(error);
                                
                                return (
                                    <Fragment>
                                        {data.coins.map(coin => <CoinItem key={coin.id} coin={coin} />)}
                                    </Fragment>
                                );
                            }}

                        </Query>
                    </table>
                
                
            </Fragment>
        );
    }
}

export default Coins;
