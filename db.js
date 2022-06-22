const mongoose = require('mongoose')

const connectionString = 'mongodb://localhost:27017/ironshop'

mongoose
    .connect(connectionString)
    .then(connectionInfo => console.log(`Connected to Mongo! Database name: "${connectionInfo.connections[0].name}"`))
    .catch(err => console.log('Error on connection', err))

