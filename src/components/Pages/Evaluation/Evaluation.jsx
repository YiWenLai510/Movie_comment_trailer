import React, { Component } from "react";

import "./Evaluation.css";
export default class SearchBar extends Component {
    static defaultProps = {
        canClick: true,
        rateNum: 10,
        handleSelectRate: null,
        rateValue: 0
    }

    constructor (props) {
        super(props)
        this.state = {
            rateValue: 0,
            rateArray: new Array(Number(props.rateNum)).fill('')
        }
    }

    handleSelectRate (value) {
        if (!this.props.canClick) {
            return
        }
        this.setState({
            rateValue: value
        })
        this.props.handleSelectRate && this.props.handleSelectRate(value)
    }

    render () {
        const {rateArray, rateValue} = this.state
        const {rateNum} = this.props
        return (
            <div>
                <div className="title_container">
                    <textarea 
                        name="title"
                        value={this.state.formTitle}
                        id="title"
                        placeholder="Post title..."
                        onChange={e =>
                        this.setState({ formTitle: e.target.value })
                        }
                    ></textarea>
                </div>
                <div className="rate">
                    <div className="rate__bg">
                        {rateArray.map((item, index) => <span onClick={() => this.handleSelectRate(index+1)} key={`rate_${index}`}>☆</span>)}
                        <div className="bg__realrate" style={{width: `calc(${rateValue ? rateValue : this.props.rateValue} / ${rateNum} * 100%)`}}>
                            {rateArray.map((item, index) => <span onClick={() => this.handleSelectRate(index+1)} key={`rate_selected_${index}`}>★</span>)}
                        </div>
                    </div>
                    <button className="evalution-send">send</button>
                </div>
            </div>
            

        )
    }
}

