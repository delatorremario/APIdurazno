
Router.route('/versions',{where: 'server'})
  .get(function(){
        var response = Version.find({},{sort:{createdAt:-1}}).fetch();
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
  })
  .post(function(){
        var response;
        if(this.request.body.version === undefined) {
            response = {
                "error" : true,
                "message" : "invalid data"
            };
        } else {
            Version.insert({
                    version: this.request.body.version,
                    description: this.request.body.description || '',
                    createdAt: new Date()
                }
            );
            response = {
                "error" : false,
                "message" : "Version added."
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
  });
