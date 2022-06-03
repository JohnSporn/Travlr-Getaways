const fs = require('fs');
const indexTypes = JSON.parse(fs.readFileSync('./data/index_blogs.json'));

// GET Homepage
const index = (req, res) => {
    res.render('index', {title: 'Travlr Getaways', indexTypes});
};

module.exports = {
    index
}