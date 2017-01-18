
Router.route('/votes',{where: 'server'})
  .get(function(){
        var response = Artist.find().fetch();
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
  })
  .post(function(){
        var response;
        if(this.request.body.vote === undefined) {
            response = {
                "error" : true,
                "message" : "invalid data"
            };
        } else {
            Artist.update({_id:vote},{
                name : this.request.body.name,
                _id : this.request.body._id
            });
            response = {
                "error" : false,
                "message" : "Artist added."
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
  });

Router.route('/votes/:id',{where: 'server'})

    // GET /message/:id - returns specific records

    .get(function(){
        var response;
        if(this.params.id !== undefined) {
            var data = Artist.find({_id : this.params.id}).fetch();
            if(data.length > 0) {
                response = data
            } else {
                response = {
                    "error" : true,
                    "message" : "Artist not found."
                }
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
    });
