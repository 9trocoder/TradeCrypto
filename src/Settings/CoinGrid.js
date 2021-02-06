import React from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from "../App/AppProvider";
import CoinTile from "./CoinTile";

export const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(5, .2fr);
    grid-gap: 50px;
    margin-top: 40px;
`

function getCoinsToDisplay(coinList, topSection) {
    return Object.keys(coinList).slice(0, topSection ? 10 : 70);
}

// eslint-disable-next-line
export default function({topSection}) {
    return <AppContext.Consumer>
        {({ coinList }) => <CoinGridStyled>
            {getCoinsToDisplay(coinList, topSection).map(coinKey =>
                <CoinTile topSection={topSection} coinKey={coinKey} />
            )}
        </CoinGridStyled>}
    </AppContext.Consumer>
}