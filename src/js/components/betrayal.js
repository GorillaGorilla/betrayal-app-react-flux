/**
 * Created by frederickmacgregor on 28/07/2017.
 */
"use strict";

import React from "react";

export default class Reckoning extends React.Component {
    constructor (props) {
        super();
        console.log("props", props);
        this.value = "";
        this.state = {value : props.text};
    }

    componentWillMount() {
    }

    changeHandler(event) {
        this.setState({value: event.target.value});

    }

    saveEdit(){
        const {updateFunc, id} = this.props;
        updateFunc(id, this.state.value);
        this.setState({edit: false});
    }

    clickToEdit(){
        this.setState({edit: true});
    }

    render() {
        const {text, removeFunc, updateFunc, id} = this.props;
        if (this.state.edit){
            return (
                <div>
                    <ul>
                        <input value={this.state.value} onChange={this.changeHandler.bind(this)}></input><button
                        onClick={this.saveEdit.bind(this)} >Save!</button>
                    </ul>
                </div>)

        }
        return (
            <div>
            <ul>
                <span onClick={this.clickToEdit.bind(this)}>{text}</span> <button class="btn-danger" onClick={removeFunc}>Delete</button>
            </ul>
        </div>);

    }
}
