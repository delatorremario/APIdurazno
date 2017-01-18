Router.configure({
    layoutTemplate: 'main'
});

Router.route('/', function () {
  this.render('Home', {
    data: function () {
         return {fbkusers: FacebookUser.find()} ; }
  });
});