/**
 * Created by frederickmacgregor on 29/07/2017.
 */
"use strict";

import {EventEmitter} from "events";

import dispatcher from "../dispatcher";

class BetrayalStore extends EventEmitter {

    constructor(){
        super();
        this.betrayals = [
            {
                id: 113464613,
                text: "Murdered",
                avenged: false},
            {
                id: 235684679,
                text: "Burgled",
                avenged: false
            }
        ]
    }


    createBetrayal(text){
        const id = Date.now();

        this.betrayals.push({
            id,
            text,
            avenged: false,
        });

        this.emit("change");
    }

    deleteBetrayal(id){
        const index = this.betrayals.findIndex((bet)=>{
            return bet.id === id;
        });

        this.betrayals.splice(index, 1);
        this.emit("change");
    }

    updateBetrayal(id, text){
        const index = this.betrayals.findIndex((bet)=>{
            return bet.id === id;
        });
        this.betrayals[index].text = text;
        this.emit("change");
    }

    getAll() {
        return this.betrayals;
    }

    handleActions(action){
        switch(action.type){
            case "CREATE_BETRAYAL": {
                this.createBetrayal(action.text);
                break;
            }
            case "DELETE_BETRAYAL": {
                this.deleteBetrayal(action.id);
                break;
            }
            case "RECEIVE_BETRAYALS": {
                this.betrayals = action.betrayals;
                this.emit("change");
                break;
            }
            case "UPDATE_BETRAYAL": {
                this.updateBetrayal(action.id, action.text);
                break;
            }
        }
    }


}

const betrayalStore = new BetrayalStore;
dispatcher.register(betrayalStore.handleActions.bind(betrayalStore));

export default betrayalStore;