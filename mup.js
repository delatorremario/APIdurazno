module.exports = {
  servers: {
    one: {
      host: '107.170.249.239',
      username: 'root',
      // pem:
      // password:'xxx'
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
      ROOT_URL: 'http://107.170.249.239',
      MONGO_URL:  "mongodb://durazno:durazno@ds111589.mlab.com:11589/durazno",
    },

    //dockerImage: 'kadirahq/meteord'
    deployCheckWaitTime: 160
  }
};
