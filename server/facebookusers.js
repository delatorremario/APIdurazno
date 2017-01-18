
Router.route('/fbkusers',{where: 'server'})
  .get(function(){
        var response = FacebookUser.find().fetch();
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
  })
  .post(function(){
        var response;
        if(this.request.body.public_profile === undefined || this.request.body.email === undefined ) {
            response = {
                "error" : true,
                "message" : "invalid data"
            };
        } else {
            FacebookUser.insert({
                    public_profile : this.request.body.public_profile,
                    email : this.request.body.email,
                    user_birthday : this.request.body.user_birthday,
                    user_hometown : this.request.body.user_hometown,
                    user_location : this.request.body.user_location,
                    user_religion_politics : this.request.body.user_religion_politics
            });
            response = {
                "error" : false,
                "message" : "Facebook User added."
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
  });

Router.route('/fbkusers/:id',{where: 'server'})

    // GET /message/:id - returns specific records

    .get(function(){
        var response;
        if(this.params.id !== undefined) {
            var data = FacebookUser.find({email : this.params.email}).fetch();
            if(data.length > 0) {
                response = data
            } else {
                response = {
                    "error" : true,
                    "message" : "Facebook User not found."
                }
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
    });
