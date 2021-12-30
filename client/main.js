import './main.html';

import '../imports/ui/App.js';
import {Template} from 'meteor/templating';
import {Meteor} from 'meteor/meteor';

if (Meteor.isClient) {
    Meteor.subscribe('allUsers')
    Meteor.subscribe('FeedsCollection')
}

if(Meteor.isClient) {
    Accounts.ui.config({
        passwordSignupFields: "USERNAME_AND_EMAIL"
    });

    Template.body.helpers({username:function (){
            if(Meteor.user()){
                return Meteor.user().username;
            }
            else{
                return "";
            }
        }
    });
}
