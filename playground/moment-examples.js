var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1495752289;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format("MMM D, YY @ h:mm a"));

// full month date w modifier, fullyear @ 12:13AM
console.log('current moment', currentMoment.format("MMMM Do, YYYY @ h:mm A"));
