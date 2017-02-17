import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';





Template.artist.events({
  'click button'(event, instance) {
    // hacer el sorteo
    var winning_song = _.max(this.songs,function(song){return song.votescount});
    console.log('winning_song',winning_song);

    var idfbk = winning_song.votes[_.random(0,winning_song.votes.length -1)]
    var fbkuser = FacebookUser.findOne({id_fbk:idfbk});
    console.log(idfbk,fbkuser);
    instance.winner.set(fbkuser || { first_name : 'Perfil no encontrado'});
  },
});

Template.artist.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.winner = new ReactiveVar();
});


Template.artist.helpers({
    winner () {
       return Template.instance().winner.get()
   }
})

// SORTEO

Template.draw.onCreated(function helloOnCreated() {
  this.winner = new ReactiveVar();
});

Template.draw.helpers({
  fbkusers () {
      return FacebookUser.find();  
  },
  winner () {
      return Template.instance().winner.get()
  }
});

Template.draw.events({
  'click button'(event, instance) {
    // hacer el sorteo
    //crear array de usuario
    var fbkusers = FacebookUser.find().fetch(); 
    var idfbk = fbkusers[_.random(0,fbkusers.length -1)]
    //var fbkuser = FacebookUser.findOne({id_fbk:idfbk._id});
    console.log(idfbk);
    instance.winner.set(idfbk || { first_name : 'Perfil no encontrado'});
  },
})
