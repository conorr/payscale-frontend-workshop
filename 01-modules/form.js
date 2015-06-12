let React = require('react');
let {RadioGroup, Checkbox} = require('./controls');
let constants = require('./constants');

class MeatChoiceForm extends React.Component {
    render() {
        return <div className="form-group">
            <RadioGroup groupName="meats" choices={constants.MEAT_CHOICES} />
        </div>;
    }
}

class CheeseChoiceForm extends React.Component {
    render() {
        return <div className="form-group">
            <RadioGroup groupName="cheeses" choices={constants.CHEESE_CHOICES} />
        </div>;
    }
}

class ToppingChoiceForm extends React.Component {
    render() {
        return <div className="form-group">
            {constants.TOPPING_CHOICES.map(topping => <Checkbox>{topping}</Checkbox>)}
        </div>;
    }
}

class CondimentChoiceForm extends React.Component {
    render() {
        return <div className="form-group">
            {constants.CONDIMENT_CHOICES.map(condiment => <Checkbox>{condiment}</Checkbox>)}
        </div>;
    }
}

module.exports = {
    MeatChoiceForm,
    CheeseChoiceForm,
    ToppingChoiceForm,
    CondimentChoiceForm
};
