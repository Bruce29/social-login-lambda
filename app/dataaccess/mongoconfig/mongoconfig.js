/**
 * Bruno Rivera
 */
const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/passport-social-auth', {useNewUrlParser: true})
    .then(() => {console.log('Database is connected') },
         err => { console.log('Can not connect to the database'+ err)});

module.exports = mongoose;