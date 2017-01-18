
Router.route('/artistsshow/:idfbk',{where: 'server'})

    // GET /message/:id - returns specific records

   .get(function(){
        var idfbk = this.params.idfbk;
        var response = Artist.find().fetch();

        var response = _.map(response,function(art){
            art.songs = _.map(art.songs,function(song){
                song.votescount = song.votes.length || 0;
                song.ivote =_.some(song.votes,function(id){ return id==idfbk });
                return song;
            })
            return art
        })

        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
  });  
