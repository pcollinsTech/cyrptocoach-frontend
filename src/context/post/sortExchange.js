export default function sortExchange(filters, exchanges) {
    const paymentsExchanges = [];
    const fiatsExchanges = [];
    const cryptosExchanges = [];
    const countriesExchanges = [];

    const { payments, fiats, cryptos, countries } = filters;

    const sortPayment = (exchange, payments) => {
        payments.forEach(payment => {
            if (exchange.payments.includes(payment.value)) {
                return paymentsExchanges.push(exchange);
            } else {
                return;
            }
        });
    };

    const sortFiat = (exchange, fiats) => {
        fiats.forEach(fiat => {
            if (exchange.fiats.includes(fiat.value)) {
                return fiatsExchanges.push(exchange);
            } else {
                return;
            }
        });
    };

    const sortCrypto = (exchange, cryptos) => {
        cryptos.forEach(crypto => {
            if (exchange.cryptos.includes(crypto.value)) {
                return cryptosExchanges.push(exchange);
            } else {
                return;
            }
        });
    };

    const sortCountry = (exchange, countries) => {
        countries.forEach(country => {
            if (exchange.countries.includes(country.value)) {
                return countriesExchanges.push(exchange);
            } else {
                return;
            }
        });
    };

    exchanges.map(exchange => {
        if (payments.length >= 1) {
            return sortPayment(exchange, payments);
        }
        if (fiats.length >= 1) {
            return sortFiat(exchange, fiats);
        }
        if (cryptos.length >= 1) {
            return sortCrypto(exchange, cryptos);
        }
        if (countries.length >= 1) {
            return sortCountry(exchange, countries);
        }
    });
}
