const fs = require('fs');
const aboutTypes = JSON.parse(fs.readFileSync('./data/about_ads.json'));

// GET About Page
const about = (req, res) => {
    res.render('about', {title: 'Travlr Getaways', aboutTypes});
};

module.exports = {
    about
}