import React from 'react';
import moment from 'moment';

import './style.css';

export default class Header extends React.Component {

    render() {
        return (<span className="header">Workflow Widget ({moment().format('LLL')})</span>);
    }
}