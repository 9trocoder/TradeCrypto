import React from 'react';

const cc = require('cryptocompare');
cc.setApiKey('5c8ed6d444d41ba7bd0e8d238a9d48506f024974b1ea11cfa67754736a5ac4cc');

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            ...this.savedSettings(),
            setPage: this.setPage,
            confirmFavorites: this.confirmFavorites
        }
    }

    componentDidMount = () => {
        this.fetchCoins();
    }

    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data;
        this.setState({ coinList });
    }

    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        });
        localStorage.setItem('tradeIndex', JSON.stringify({
            test: 'hello'
        }));

    }

    savedSettings() {
        let cryptoDashData = JSON.parse(localStorage.getItem('tradeIndex'));
        if (!cryptoDashData) {
            return { page: 'settings', firstVisit: true }
        }
        return {};
    }

    setPage = page => this.setState({ page })
    
    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}