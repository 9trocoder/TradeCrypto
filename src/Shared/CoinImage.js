import React from 'react';

// eslint-disable-next-line
export default function ({ coin, style }) {
    return <img
        alt={coin.CoinSymbol}
        style={style || { height: '50px', paddingTop: '10px' }}
        src={`http://cryptocompare.com/${coin.ImageUrl
            }`}
    />;
}