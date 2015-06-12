let React = require('react');
let {MeatChoiceForm,
     CheeseChoiceForm,
     ToppingChoiceForm,
     CondimentChoiceForm} = require('./form');

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
