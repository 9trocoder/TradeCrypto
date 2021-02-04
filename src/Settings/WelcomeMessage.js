import React from 'react';
import { AppContext } from "../App/AppProvider";

// eslint-disable-next-line
export default function ({ firstVisit }) {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? <div>
          Welcome to Trade-Index, Select your preferred coins to begin.{' '}
        </div> : null
      }
    </AppContext.Consumer>
  );
};
  