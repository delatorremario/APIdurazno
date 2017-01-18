
Router.route('/vote',{where: 'server'})
  .post(function(){
        var response;
        if(this.request.body.artist === undefined) {
            response = {
                "error" : true,
                "message" : "invalid data"
            };
        } else {
               var vote = this.request.body;

          var result = Artist.update({name:vote.artist,'songs.name':vote.song},{
                 $addToSet:{'songs.$.votes':vote.idfbk}
                }
            );
            response = {
                "error" : false,
                "message" : "Vote added."
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
  });
