let React = require('react');

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

module.exports = {
    RadioButton: RadioButton,
    RadioGroup: RadioGroup,
    Checkbox: Checkbox
};
