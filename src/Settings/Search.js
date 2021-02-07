import React from 'react';
import styled from 'styled-components';
import { backgroundColor2, fontSize2 } from "../Shared/Styles";

const SearchGrid = styled.div`
  display: grid;;
  grid-template-columns: 200px 1fr;
`;
const SearchInput = styled.input`
  ${backgroundColor2}
  ${fontSize2}
  border: 1px solid;
  height: 25px;
  color: white;
  place-self: center left;
`

// eslint-disable-next-line
export default function() {
  return (
    <SearchGrid>
      <h3>Search all coins</h3>
      <SearchInput/>
    </SearchGrid>
  );
}
