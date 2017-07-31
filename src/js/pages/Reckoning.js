/**
 * Created by frederickmacgregor on 28/07/2017.
 */
"use strict";
import React from "react";
import * as BetrayalActions from "../actions/BetrayalActions";
import BetrayalStore from "../stores/BetrayalStore";
import Betrayal from "../components/betrayal";

export default class Reckoning extends React.Component {
    constructor(props){
        super();
        this.getBetrayals = this.getBetrayals.bind(this);
        this.state = {
            betrayals : BetrayalStore.getAll(),
            newBetrayal : "Write me!",
        }
    }

    componentWillMount() {
        BetrayalStore.on("change", this.getBetrayals);
    }

    componentWillUnmount() {
        BetrayalStore.removeListener("change", this.getBetrayals);
    }

    getBetrayals() {
        this.setState(
            {betrayals: BetrayalStore.getAll() || [],}
        );
    }

    reloadBetrayals() {
        BetrayalActions.reloadBetrayals();
    }

    createBetrayal(){
        BetrayalActions.createBetrayal(this.state.newBetrayal);
    }


    handleChange(event) {
        this.setState({newBetrayal: event.target.value});
    }



    render(){
        const {betrayals, newBetrayal} = this.state;
        const removeFunc = function(bet){
            return function(){
                BetrayalActions.deleteBetrayal(bet.id);
            };
        };
        const updateFunc = BetrayalActions.updateBetrayal;

        const betrayalComponents = betrayals.map((bet)=> <Betrayal updateFunc={updateFunc} removeFunc={removeFunc(bet)} edit={false} key={bet.id}{...bet}/>);
        return (
            <div>
                <button onClick={this.reloadBetrayals.bind(this)}>Reload!</button>
                <h1>Betrayals</h1>
                <ul>
                    {betrayalComponents}
                    <input value = {newBetrayal} onChange={this.handleChange.bind(this)}/> <button onClick={this.createBetrayal.bind(this)} class = "btn-success"> Submit! </button>
                </ul>
            </div>
        );
    }

}