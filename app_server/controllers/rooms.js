var fs = require('fs');
var bookRoom = JSON.parse(fs.readFileSync('./data/bookRoom.json', 'utf8'));

/* GET travel view */
const rooms = (req, res) => {
    res.render('rooms', { title: 'Travlr Getaways', bookRoom });
};

module.exports = {
    rooms
};