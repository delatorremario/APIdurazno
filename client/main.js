import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.home.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.winner = new ReactiveVar();
});

Template.home.helpers({
    winner () {
      return Template.instance().winner.get()
    }
});


Template.home.events({
  'click button'(event, instance) {
    // hacer el sorteo
    var fbkusers = this.fbkusers.fetch();
    instance.winner.set(fbkusers[_.random(0,fbkusers.length -1)]);
  },
});
