const fs = require('fs');
const mealTypes = JSON.parse(fs.readFileSync('./data/meals.json'));

// GET Meals Page
const meals = (req, res) => {
    res.render('meals', {title: 'Travlr Getaways', mealTypes});
};

module.exports = {
    meals
}