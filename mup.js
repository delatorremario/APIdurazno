module.exports = {
  servers: {
    one: {
      host:'34.196.82.38', //'107.170.249.239',
      username: 'ubuntu',
      pem:'/Users/mariodelatorre/.ssh/ubuntu-mario.pem'
      //password:'' //'mmllaa1234'
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'apptest',
    path: '.',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://34.196.82.38',
      MONGO_URL:  "mongodb://durazno:durazno@ds111589.mlab.com:11589/durazno",
    },

    //dockerImage: 'kadirahq/meteord'
    deployCheckWaitTime: 160
  }
};
