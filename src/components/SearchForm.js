import React, { useContext, useState } from "react";
import Select from "react-select";
import ExchangeContext from "../context/exchange/exchangeContext";

const SearchForm = () => {
  const exchangeContext = useContext(ExchangeContext);

  const {
    cryptoOptions,
    countryOptions,
    paymentOptions,
    fiatOptions,
    filterByCryptos,
    filterByFiats,
    filterByPayments,
    filterByCountries,
    setSearch
  } = exchangeContext;

  const [payments, setPayments] = useState([]);
  const [fiats, setFiats] = useState([]);
  const [cryptos, setCryptos] = useState([]);
  const [countries, setCountries] = useState([]);

  const cryptoChange = cryptos => {
    console.log("searchform", cryptos);
    setCryptos(cryptos);
    filterByCryptos(cryptos);
  };
  const fiatChange = fiats => {
    setFiats(fiats);
    filterByFiats(fiats);
  };
  const paymentChange = payments => {
    setPayments(payments);
    filterByPayments(payments);
  };
  const countryChange = countries => {
    setCountries(countries);
    filterByCountries(countries);
  };

  const clear = () => {
    setPayments([]);
    setFiats([]);
    setCryptos([]);
    setCountries([]);
  };
  const onSubmit = e => {
    e.preventDefault();
    const filters = {
      payments,
      fiats,
      cryptos,
      countries
    };
    setSearch(filters);
  };
  return (
    <div>
      <form className='form'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-3'>
              <label className='my-1 mr-2' htmlFor='iWantToBuyWith'>
                I want to buy
              </label>
              <Select name='cryptoChoices' value={cryptos} onChange={cryptoChange} options={cryptoOptions} isMulti />
            </div>
            <div className='col-sm-3'>
              {" "}
              <label className='my-1 mr-2' htmlFor='iWantToPayWith'>
                I want to buy with
              </label>
              <Select name='fiatChoices' value={fiats} onChange={fiatChange} options={fiatOptions} isMulti />
            </div>
            <div className='col-sm-3'>
              <label className='my-1 mr-2' htmlFor='iLiveIn'>
                I live in
              </label>
              <Select name='locationChoices' value={countries} onChange={countryChange} options={countryOptions} isMulti />
            </div>
            <div className='col-sm-3'>
              <label className='my-1 mr-2' htmlFor='iWantToPayWith'>
                I want to pay with
              </label>
              <Select name='paymentChoices' value={payments} onChange={paymentChange} options={paymentOptions} isMulti />
            </div>
          </div>
        </div>

        <button type='submit' className='btn btn-primary my-1' onClick={onSubmit}>
          Submit
        </button>
        <button onClick={clear} className='btn btn-light my-1'>
          Clear
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
