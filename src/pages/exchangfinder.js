import React, { useContext, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import AssetMarket from "../components/AssetMarket";
import ExchangeContext from "../context/exchange/exchangeContext";
import Layout from "../layout/Layout";

const ExchangeFinder = props => {
    const exchangeContext = useContext(ExchangeContext);

    const {
        getExchanges,
        getCryptos,
        getCountries,
        getPayments,
        getFiats
    } = exchangeContext;

    useEffect(() => {
        getExchanges();
        getCryptos();
        getCountries();
        getPayments();
        getFiats();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Layout props={props}>
            <div className="container">
                <SearchForm />
                <AssetMarket />
            </div>
        </Layout>
    );
};

export default ExchangeFinder;
