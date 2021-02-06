import React from 'react';
import { AppContext } from "../App/AppProvider";
import styled from "styled-components";
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';

export const Tiling = styled.div`
    border: 0.5px solid grey; 
    border-radius: 1px; 
    padding: 10px;
    background-color: teal;
    color: orange;
    &:hover {
        cursor: pointer;
        background-color: #13161b;
        color: orange;
    }
`

// eslint-disable-next-line
export default function ({ coinKey }) {
    return <AppContext.Consumer>
        {({ coinList }) => {
            let coin = coinList[coinKey];
 
            const TileClass = Tiling;
            return <TileClass>
                <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} />
                <CoinImage coin={coin} />
            </TileClass>
        }}
    </AppContext.Consumer>
}