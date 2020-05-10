const mongoose = require('mongoose');

module.exports = async () => {
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useUnifiedTopology', true);
  mongoose.connect(process.env.MONGODB_CONN_STRING);

  mongoose.connection.on('connected', () => {
    console.log("Connection Successful")
  });

  mongoose.connection.on('error', (err) => {
    console.log(`Database Connection Unsuccessful, Error: ${err}`);
  });
}