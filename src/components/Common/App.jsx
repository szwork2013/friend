import React from 'react';
import Reflux from 'reflux';
import ReactMixin from 'react-mixin';

export default class App extends React.Component {

    constructor(props) {
        super(props);

    }
    getChildContext() {
        return {
            location: this.props.location
        };
    }
    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
            );
    }
}
App.childContextTypes = {
    location: React.PropTypes.object
};
