import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value ? props.value : null,
        };
    }

    render() {
        if (this.state.value !== null) {
            return (
                <button className="" onClick={() => alert('click')}>
                    {this.state.value}
                </button>
            );
        } else {
            console.log("button value has not been provided so button will not be displayed");
            return null;
        }
    }
}