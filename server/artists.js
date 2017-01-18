
Router.route('/artists',{where: 'server'})
  .get(function(){
        var response = Artist.find().fetch();
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
  })
  .post(function(){
        var response;
        if(this.request.body.name === undefined) {
            response = {
                "error" : true,
                "message" : "invalid data"
            };
        } else {
            console.log('artist',this.request.body);
            Artist.insert(
               this.request.body
            );
            response = {
                "error" : false,
                "message" : "Artist added."
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
  });


Router.route('/artists/:id',{where: 'server'})

    // GET /message/:id - returns specific records

    .get(function(){
        var response;
        if(this.params.name !== undefined) {
            var data = Artist.find({name : this.params.id}).fetch();
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
    })
    .delete(function(){
        var response;
        if(this.params.id !== undefined) {
            var data = Artist.remove({_id : this.params.id});
            if(data) {
                response = {
                    "error" : false,
                    "message" : "Artist deleted."
                }
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
