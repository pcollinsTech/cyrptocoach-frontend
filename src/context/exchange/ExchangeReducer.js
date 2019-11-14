import {
    GET_EXCHANGES,
    SET_LOADING,
    GET_CRYPTOS,
    GET_FIATS,
    GET_COUNTRIES,
    GET_PAYMENTS,
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

export default (state, action) => {
    switch (action.type) {
        case FILTER_BY_FIATS:
            return {
                ...state,
                filteredExchanges: action.payload,
                loading: false
            };
        case FILTER_BY_CRYPTOS:
            return {
                ...state,
                filteredExchanges: action.payload,
                loading: false
            };
        case FILTER_BY_COUNTRIES:
            return {
                ...state,
                filteredExchanges: action.payload,
                loading: false
            };
        case FILTER_BY_PAYMENTS:
            return {
                ...state,
                filteredExchanges: action.payload,
                loading: false
            };
        case SET_SEARCHED_EXCHANGES:
            return {
                ...state,
                filteredExchanges: action.payload,
                loading: false
            };
        case GET_EXCHANGES:
            return {
                ...state,
                exchanges: action.payload,
                loading: false
            };
        case GET_CRYPTOS:
            return {
                ...state,
                cryptos: action.payload,
                loading: false
            };
        case SET_CRYPTO_OPTIONS:
            return {
                ...state,
                cryptoOptions: action.payload
            };
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                loading: false
            };
        case SET_COUNTRY_OPTIONS:
            return {
                ...state,
                countryOptions: action.payload
            };
        case GET_PAYMENTS:
            return {
                ...state,
                payments: action.payload,
                loading: false
            };
        case SET_PAYMENT_OPTIONS:
            return {
                ...state,
                paymentOptions: action.payload
            };
        case GET_FIATS:
            return {
                ...state,
                fiats: action.payload,
                loading: false
            };
        case SET_FIAT_OPTIONS:
            return {
                ...state,
                fiatOptions: action.payload
            };
        case SET_LOADING: {
            return {
                ...state,
                loading: true
            };
        }
        default:
            return state;
    }
};
