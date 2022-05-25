const fs = require('fs'); // filesystem
const roomTypes = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

// GET Homepage
const rooms = (req, res) => {
    res.render('rooms', {title: 'Travlr Getaways', roomTypes});
};

module.exports = {
    rooms
}