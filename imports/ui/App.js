import { Template } from 'meteor/templating';
import { FeedsCollection } from '../api/FeedsCollection';
import './App.html';
import {Meteor} from "meteor/meteor";

Template.mainContainer.helpers({
    feeds() {
        return FeedsCollection.find({},{sort:{createdAt: -1}});
    },
    getUser:function (createdBy){
        const user = Meteor.users.findOne({_id:createdBy});
        if(user){
            return user.emails[0].address;E
        }
    }
});

Template.form.events({
    'submit .feed-form'(event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        const { target } = event;
        const text = target.text.value;
        // Insert a comment into the collection
        if(Meteor.user()){
            FeedsCollection.insert({
                text: text,
                createdBy: Meteor.user()._id,
                createdAt: new Date(), // current time
            });
        }
        // Clear form
        target.text.value = '';
    },
});
