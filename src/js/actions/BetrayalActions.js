/**
 * Created by frederickmacgregor on 29/07/2017.
 */
"use strict";

import dispatcher from "../dispatcher";

export function createBetrayal(text) {
    dispatcher.dispatch({
        type: "CREATE_BETRAYAL",
        text,
    });
}

export function deleteBetrayal(id) {
    dispatcher.dispatch({
        type: "DELETE_BETRAYAL",
        id,
    });
}

export function updateBetrayal(id, text) {
    dispatcher.dispatch({
        type: "UPDATE_BETRAYAL",
        id,
        text,
    })
}

export function reloadBetrayals() {
    // axios("http://someurl.com/somedataendpoint").then((data) => {
    //   console.log("got the data!", data);
    // })
    dispatcher.dispatch({type: "FETCH_BETRAYALS"});
    setTimeout(() => {
        dispatcher.dispatch({type: "RECEIVE_BETRAYALS", betrayals: [
            {
                id: 8484848484,
                text: "Used last toothpaste",
                avenged: false
            },
            {
                id: 6262627272,
                text: "Slept with Wife",
                avenged: true
            },
        ]});
    }, 1000);
}
