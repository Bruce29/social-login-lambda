/**
 * Bruno Rivera
 */
var mongoose = require('../dataaccess/mongoconfig/mongoconfig');
var Users = require('../dataaccess/models/users');

var findUserById = function(){
    Users.find({'environment':'SANDBOX'})
        .then(
            (resolve) => console.log(resolve),
            (err) => console.error(err)
        );
}

module.exports.findUserById = findUserById;