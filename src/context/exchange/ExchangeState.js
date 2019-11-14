import React, { useReducer } from "react";
import axios from "axios";
import ExchangeContext from "./exchangeContext";
import ExchangeReducer from "./ExchangeReducer";
import {
    GET_EXCHANGES,
    SET_LOADING,
    GET_CRYPTOS,
    GET_COUNTRIES,
    GET_PAYMENTS,
    GET_FIATS,
    SET_CRYPTO_OPTIONS,
    SET_PAYMENT_OPTIONS,
    SET_COUNTRY_OPTIONS,
    SET_FIAT_OPTIONS,
    SET_SEARCHED_EXCHANGES,
    FILTER_BY_CRYPTOS,
    FILTER_BY_FIATS,
    FILTER_BY_COUNTRIES,
    FILTER_BY_PAYMENTS
} from "../types";
import sortExchange from "./sortExchange";

function removeDuplicates(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
}

const ExchangeState = props => {
    const inititalState = {
        exchanges: [],
        countries: [],
        cryptos: [],
        fiats: [],
        payments: [],
        filteredExchanges: [],
        countryOptions: [],
        cryptoOptions: [],
        paymentOptions: [],
        fiatOptions: [],
        posts: [],
        loadding: false
    };

    const [state, dispatch] = useReducer(ExchangeReducer, inititalState);

    // Search Users
    const getExchanges = async () => {
        setLoading();
        const res = await axios.get(`http://api.crypto.local/api/exchanges`);
        console.log("EXCHANGES", res.data);

        dispatch({
            type: GET_EXCHANGES,
            payload: res.data
        });
    };

    const getCryptos = async () => {
        setLoading();
        const res = await axios.get(`http://api.crypto.local/api/cryptos`);
        setCryptos(res.data);
        console.log("CRYPTOS", res.data);
        dispatch({
            type: GET_CRYPTOS,
            payload: res.data
        });
    };
    const setCryptos = data => {
        let options = data.map(stat => {
            return { value: stat.id, label: `${stat.name} - ${stat.symbol}` };
        });

        dispatch({
            type: SET_CRYPTO_OPTIONS,
            payload: options
        });
    };
    const getCountries = async () => {
        setLoading();
        const res = await axios.get(`http://api.crypto.local/api/countries`);
        setCountries(res.data);
        dispatch({
            type: GET_COUNTRIES,
            payload: res.data
        });
    };
    const setCountries = data => {
        let options = data.map(stat => {
            return { value: stat.id, label: `${stat.name} - ${stat.symbol}` };
        });
        dispatch({
            type: SET_COUNTRY_OPTIONS,
            payload: options
        });
    };
    const getPayments = async () => {
        setLoading();
        const res = await axios.get(`http://api.crypto.local/api/payments`);
        setPayments(res.data);
        dispatch({
            type: GET_PAYMENTS,
            payload: res.data
        });
    };
    const setPayments = data => {
        let options = data.map(stat => {
            return { value: stat.id, label: stat.name };
        });
        dispatch({
            type: SET_PAYMENT_OPTIONS,
            payload: options
        });
    };
    const getFiats = async () => {
        setLoading();
        const res = await axios.get(`http://api.crypto.local/api/fiats`);
        setFiats(res.data);
        dispatch({
            type: GET_FIATS,
            payload: res.data
        });
    };
    const setFiats = data => {
        let options = data.map(stat => {
            return { value: stat.id, label: `${stat.name} - ${stat.symbol}` };
        });
        dispatch({
            type: SET_FIAT_OPTIONS,
            payload: options
        });
    };

    const filterByCryptos = cryptos => {
        setLoading();
        console.log("excahngestate", cryptos);
        let data = [];
        if (state.filteredExchanges.length >= 1) {
            cryptos.forEach(crypto => {
                state.filteredExchanges.map(exchange => {
                    console.log("Echnage", exchange);
                    if (exchange.cryptos.includes(crypto.value)) {
                        console.log("Echnage included!", exchange);
                        return data.push(exchange);
                    }
                    // eslint-disable-next-line array-callback-return
                    return;
                });
            });
        } else if (state.filteredExchanges.length === 0) {
            state.exchanges.map(exchange => {
                console.log("EXCHANGE!!", exchange);
                return cryptos.forEach(crypto => {
                    if (exchange.cryptos.includes(crypto.value)) {
                        return data.push(exchange);
                    }
                    return;
                });
            });
        }
        let filteredData = removeDuplicates(data, "id");

        dispatch({
            type: FILTER_BY_CRYPTOS,
            payload: filteredData
        });
    };

    const filterByCountries = countries => {
        setLoading();

        console.log("HIHI", countries);
        var data = [];
        if (state.filteredExchanges.length >= 1) {
            state.filteredExchanges.map(exchange => {
                return countries.forEach(country => {
                    if (exchange.counties.includes(country.value)) {
                        return data.push(exchange);
                    }
                });
            });
        } else {
            state.exchanges.map(exchange => {
                return countries.forEach(country => {
                    if (exchange.counties.includes(country.value)) {
                        return data.push(exchange);
                    }
                });
            });
        }
        let filteredData = removeDuplicates(data, "id");
        dispatch({
            type: FILTER_BY_COUNTRIES,
            payload: filteredData
        });
    };

    const filterByFiats = fiats => {
        setLoading();

        var data = [];
        if (state.filteredExchanges.length >= 1) {
            state.filteredExchanges.map(exchange => {
                return fiats.forEach(fiat => {
                    if (exchange.fiats.includes(fiat.value)) {
                        return data.push(exchange);
                    }
                });
            });
        } else {
            state.exchanges.map(exchange => {
                return fiats.forEach(fiat => {
                    if (exchange.fiats.includes(fiat.value)) {
                        return data.push(exchange);
                    }
                });
            });
        }

        let filteredData = removeDuplicates(data, "id");
        dispatch({
            type: FILTER_BY_COUNTRIES,
            payload: filteredData
        });
    };

    const filterByPayments = payments => {
        setLoading();

        var data = [];
        if (state.filteredExchanges.length >= 1) {
            state.filteredExchanges.map(exchange => {
                return payments.forEach(payment => {
                    if (exchange.payments.includes(payment.value)) {
                        return data.push(exchange);
                    }
                });
            });
        } else {
            state.exchanges.map(exchange => {
                return payments.forEach(payment => {
                    if (exchange.payments.includes(payment.value)) {
                        return data.push(exchange);
                    }
                });
            });
        }
        let filteredData = removeDuplicates(data, "id");
        dispatch({
            type: FILTER_BY_COUNTRIES,
            payload: filteredData
        });
    };

    const setSearch = filters => {
        setLoading();
        const newExhangeList = [];
        sortExchange(filters, state.exchanges);

        console.log("Set State", filters);
        dispatch({
            type: SET_SEARCHED_EXCHANGES,
            payload: newExhangeList
        });
    };
    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });
    return (
        <ExchangeContext.Provider
            value={{
                exchanges: state.exchanges,
                countries: state.countries,
                cryptos: state.cryptos,
                fiats: state.fiats,
                payments: state.payments,
                filteredExchanges: state.filteredExchanges,
                countryOptions: state.countryOptions,
                cryptoOptions: state.cryptoOptions,
                paymentOptions: state.paymentOptions,
                fiatOptions: state.fiatOptions,
                loading: state.loading,
                getExchanges,
                getFiats,
                getCryptos,
                getCountries,
                getPayments,
                filterByCryptos,
                filterByFiats,
                filterByPayments,
                filterByCountries,
                setSearch
            }}
        >
            {props.children}
        </ExchangeContext.Provider>
    );
};

export default ExchangeState;
