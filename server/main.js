import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Artist = new Meteor.Collection('artist');
  FacebookUser = new Meteor.Collection('facebookuser');
});


