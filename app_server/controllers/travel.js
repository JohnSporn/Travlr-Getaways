
const fs = require('fs'); // filesystem
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

// GET Homepage
const travel = (req, res) => {
    res.render('travel', {title: 'Travlr Getaways', trips});
};

module.exports = {
    travel
}