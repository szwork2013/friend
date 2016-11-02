import React from 'react';

export default class Base extends React.Component {

    binder(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }

    onErrorStore() {}
}

//ReactMixin.onClass(Base, Reflux.listenTo(ErrorStore, 'onErrorStore'));
