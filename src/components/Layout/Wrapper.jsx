import React from 'react';
import Base from '../Common/Base';


export default class Wrapper extends Base {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.binder('setAside');

    }
    componentDidMount() {


    }
    setAside(){

    }
    render() {

        return (
            <div >
                <section   >
                    {this.props.children}
                </section>
            </div>
            );
    }
}
