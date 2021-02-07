import React from 'react';
import { AppContext } from "../App/AppProvider";
import { SelectableTile, DisabledTile, TileDelete } from "../Shared/Tile";
import CoinImage from '../Shared/CoinImage';
import CoinHeaderGrid from './CoinHeaderGrid';

// eslint-disable-next-line
export default function ({ coinKey, topSection }) {
    return <AppContext.Consumer>
        {({ coinList }) => {
            let coin = coinList[coinKey];
 
            let TileClass = SelectableTile;
            if (topSection) {
                TileClass = TileDelete;
            }
            return <TileClass>
                <CoinHeaderGrid topSection={topSection} name={coin.CoinName} symbol={coin.Symbol} />
                <CoinImage coin={coin} />
            </TileClass>
        }}
    </AppContext.Consumer>
}