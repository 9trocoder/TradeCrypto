import React from 'react';
import { AppContext } from "../App/AppProvider";
import { SelectableTile, DisabledTile, TileDelete } from "../Shared/Tile";
import CoinImage from '../Shared/CoinImage';
import CoinHeaderGrid from './CoinHeaderGrid';

function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
    return topSection ? () => {
        removeCoin(coinKey)
    } : () => {
        addCoin(coinKey)
    }
}

// eslint-disable-next-line
export default function ({ coinKey, topSection}) {
    return <AppContext.Consumer>
        {({ coinList, addCoin, removeCoin, isInFavorites }) => {
            let coin = coinList[coinKey];
 
            let TileClass = SelectableTile;
            if (topSection) {
                TileClass = TileDelete;
            } else if (isInFavorites(coinKey)) {
                TileClass = DisabledTile;
            }
            return <TileClass
                onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}
            >
                <CoinHeaderGrid
                    topSection={topSection} 
                    name={coin.CoinName}
                    symbol={coin.Symbol} />
                <CoinImage coin={coin} />
            </TileClass>
        }}
    </AppContext.Consumer>
}