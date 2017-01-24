Router.configure({
    layoutTemplate: 'main'
});

Router.route('/', function () {
  this.render('Home', {
    data: function () {
        var response = Artist.find().fetch();
        var response = _.map(response,function(art){
            art.songs = _.map(art.songs,function(song){
                song.votescount = song.votes.length || 0;
                //song.ivote =_.some(song.votes,function(id){ return id==idfbk });
                return song;
            })
            return art
        })
        console.log('response',response);
        return {artists: response} ; }
  });
});