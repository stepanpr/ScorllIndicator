import React, { Component } from 'react';
import { Header } from 'components/Header';
import { TableComponent } from 'components/TableComponent';
import './global.less';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <TableComponent />
            </div>
        );
    }
}

export default App;
