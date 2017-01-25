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
