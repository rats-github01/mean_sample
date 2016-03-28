var mongoose = require('mongoose');
const mongoUrl = 'mongodb://heroku_rcxs9288:rncnt99asckje7ft6amcm9fhdp@ds025379.mlab.com:25379/heroku_rcxs9288s';

mongoose.connect(process.env.MONGOLAB_URI || mongoUrl, function (err) {
    if (err) {
        console.error('There was an error connecting to mongodb!');
        console.error(err);
    }
    else {
        console.log('Successfully connected to mongodb!');
    }
});
/*mongoose.connect('mongodb://localhost/mini-app', function (err) {
    if (err) console.error('There was an error connecting to mongodb!');
    else console.log('Successfully connected to mongodb!');
});*/

//Create a Person Model

var Person = mongoose.model('person', {
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    }
});

module.exports = Person;