import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.css'

export default class FeedbackOptions extends Component {
    static defaultProps = {
        options:[]
    }
    static propTypes = {
        options: PropTypes.array.isRequired
    }

    render(){
        const { options, onLeaveFeedback } = this.props;
        return(
            <div className="group-button">
                {options.map(option => (
                    <button type="button" key={option.id} onClick={() => onLeaveFeedback(option.type)}>{option.name}</button>
                ))}
            </div>
        );
    }
}
