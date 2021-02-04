import React from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from "../App/AppProvider";

export const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(5, .2fr);
    grid-gap: 35px;
`

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
export default function () {
    return <AppContext.Consumer>
        {({ coinList }) => <CoinGridStyled>
            {Object.keys(coinList).map(coinKey =>
                <Tiling>
                    {coinKey}
                </Tiling>
            )}
        </CoinGridStyled>}
    </AppContext.Consumer>
}