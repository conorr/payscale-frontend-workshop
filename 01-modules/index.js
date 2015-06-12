let React = require('react');

const FRUIT_CHOICES = [
    'apple',
    'banana',
    'pineapple',
];

const MEAT_CHOICES = [
    'ham',
    'turkey',
    'bacon',
    'tofu',
    'no meat',
];

const CHEESE_CHOICES = [
    'cheddar',
    'sharp cheddar',
    'swiss',
    'gouda',
    'no cheese'
];

const TOPPING_CHOICES = [
    'lettuce',
    'arugula',
    'tomato',
    'red onions',
    'sweet onions',
    'pickles',
];

const CONDIMENT_CHOICES = [
    'mayonnaise',
    'yellow mustard',
    'stone ground mustard',
    'oil & vinegar',
    'sriracha'
];

class RadioButton extends React.Component {
    render() {
        return <label className="radio-inline">
                <input
                    type="radio"
                    name={this.props.name}
                    value={this.props.value}
                />
                    {this.props.children}
        </label>;
    }
}

class RadioGroup extends React.Component {
    render() {
        return <div>
            {this.props.choices.map(choice => {
                return <RadioButton name={this.props.groupName} value={choice}>
                    {choice}
                </RadioButton>
            })}
        </div>;
    }
}

class Checkbox extends React.Component {
    render() {
        return <label className="checkbox-inline">
                <input type="checkbox" />{this.props.children}
        </label>;
    }
}

class MeatChoiceForm extends React.Component {
    render() {
        return <div className="form-group">
            <RadioGroup groupName="meats" choices={MEAT_CHOICES} />
        </div>;
    }
}

class CheeseChoiceForm extends React.Component {
    render() {
        return <div className="form-group">
            <RadioGroup groupName="cheeses" choices={CHEESE_CHOICES} />
        </div>;
    }
}

class ToppingChoiceForm extends React.Component {
    render() {
        return <div className="form-group">
            {TOPPING_CHOICES.map(topping => <Checkbox>{topping}</Checkbox>)}
        </div>;
    }
}

class CondimentChoiceForm extends React.Component {
    render() {
        return <div className="form-group">
            {CONDIMENT_CHOICES.map(condiment => <Checkbox>{condiment}</Checkbox>)}
        </div>;
    }
}

class Application extends React.Component {

    _handleSubmit() {
        alert('Your lunch order has been submitted.');
    }

    render() {
        return <div>
            <h1>Sandwich Order Form</h1>
            <p>Choose a meat:</p>
            <MeatChoiceForm />
            <p>Choose a cheese:</p>
            <CheeseChoiceForm />
            <p>Choose toppings:</p>
            <ToppingChoiceForm />
            <p>Choose condiments:</p>
            <CondimentChoiceForm />
            <button
                className="btn btn-primary"
                onClick={() => this._handleSubmit()}
            >
                Submit
            </button>
        </div>
    }
}

React.render(<Application />, document.getElementById('container'));
