import React from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from "../App/AppProvider";
import CoinTile from "./CoinTiles";

export const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(5, .2fr);
    grid-gap: 35px;
    margin-top: 40px;
`



function getCoinsToDisplay(coinList) {
    return Object.keys(coinList).slice(0, 70);
}

// eslint-disable-next-line
export default function () {
    return <AppContext.Consumer>
        {({ coinList }) => <CoinGridStyled>
            {getCoinsToDisplay(coinList).map(coinKey =>
                <CoinTile coinKey={coinKey} />
            )}
        </CoinGridStyled>}
    </AppContext.Consumer>
}