const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/AccountsDB', {useNewUrlParser: true})
    .then(() => {console.log('Database is connected') },
         err => { console.log('Can not connect to the database'+ err)});

module.exports = mongoose;