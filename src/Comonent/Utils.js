import React, {Component} from 'react';

class Utils extends Component {
    static checkLoggedInUser() {
        var retrievedObject = localStorage.getItem('UN');

        if (retrievedObject != null) {
            return retrievedObject;
        } else {
            console.log("User not logged");
            return null;
        }


    }
}

export default Utils;