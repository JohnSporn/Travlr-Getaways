const fs = require('fs'); // filesystem
const newsTypes = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));
const newsLatest = JSON.parse(fs.readFileSync('./data/latest_news.json', 'utf8'));
const newsVacation = JSON.parse(fs.readFileSync('./data/vacation_tips.json', 'utf8'));

// GET Homepage
const news = (req, res) => {
    res.render('news', {title: 'Travlr Getaways', newsTypes, newsLatest, newsVacation});
};

module.exports = {
    news
}