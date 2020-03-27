import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from "../../UI/Button/Button";

class orderSummary extends Component {
    //this could be a functional component, doesn't have to be a class based component - did it just to see the lifecycle hooks

    componentDidUpdate(nextProps, nextState, nextContext) {
        console.log('[OrderSummary] WillUpdate')
    }

    render() {

        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
                return <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: ${this.props.purchasePrice.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.cancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.checkout}>CONTINUE</Button>
            </Aux>
        )
    }
};

export default orderSummary;

