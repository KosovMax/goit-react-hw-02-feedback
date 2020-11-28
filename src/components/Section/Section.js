import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import FeedbackOptions from './../FeedbackOptions/FeedbackOptions';
import Statistics from './../Statistics/Statistics';
import Notification from './../Notification/Notification'


const options = [
    {id:1, name:"Good", type:'good'},
    {id:2, name:"Neutral", type:'neutral'},
    {id:3, name:"Bad", type:'bad'}
];

export default class Section extends Component {
    static defaultProps = {
        title:'Section Name'
    };

    constructor(props){
        super(props);

        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
        }

    }

    countTotalFeedback = () => {
        const {good, neutral, bad} = this.state;
        const array = new Array;

        array.push(good);
        array.push(neutral);
        array.push(bad);

        return array.reduce((a, b) => { return a + b});
    }

    countPositiveFeedbackPercentage = () => {

        const total = this.countTotalFeedback();
        const { good } = this.state;
       
        const totslPercentage = 100 / total;
        const percentage = totslPercentage * good;

        return parseFloat(percentage.toFixed(0));
    }

    onLeaveFeedback = (type) => {
        if(type == 'good')
            this.setState({good: this.state.good + 1})
        else if(type == 'neutral')
            this.setState({neutral: this.state.neutral + 1})
        else if(type == 'bad')
            this.setState({bad: this.state.bad + 1})
        
    }

    render(){
        const { title } = this.props;
        const { good, neutral, bad} = this.state;
        const countTotalFeedback = this.countTotalFeedback();
        const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

        return(
            <> 
                <h2>{title}</h2>
                <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
                <br/>

                <h2>Statistics</h2>
                { (good !== 0 || neutral !== 0 ||  bad !== 0) ? 
                    <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage} /> :
                    <Notification title="No feedback given" />
                     
                }
            </>
        );
    }

}