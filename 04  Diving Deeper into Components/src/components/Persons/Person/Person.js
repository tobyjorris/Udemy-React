import React, { Component, Fragment }from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css'
import Aux from '../../../hoc/Auxiliary.js';
import withClass from "../../../hoc/withClass";



class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            //<Fragment>
            <Aux>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p key="i2">{this.props.children}</p>
                <input
                    key="i3"
                    //ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}/>
            </Aux>
            //</Fragment>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};


export default withClass(Person, classes.Person);