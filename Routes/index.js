

var user = require('./user');
var artist=require('./artist')
var eventDetail=require('./eventDetail')




var all = [].concat(
    
    user,
    artist,
    eventDetail
  
);
module.exports = all;