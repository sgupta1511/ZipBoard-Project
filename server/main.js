import { Meteor } from 'meteor/meteor';
import {FeedsCollection} from "../imports/api/FeedsCollection";

Meteor.startup(() => {
  if (Meteor.isClient) {
    Meteor.subscribe('allUsers')
    Meteor.subscribe('FeedsCollection')
  }
/* Adding publishers to access all user emails and feedsCollection for display*/
  if (Meteor.isServer) {
    Meteor.publish('allUsers', function() {
      return Meteor.users.find({}, {fields:{emails:1}})
    })
    Meteor.publish('FeedsCollection',function (){
      return FeedsCollection.find({});
    })
  }
  });
