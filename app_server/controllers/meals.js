// GET Meals Page
const meals = (req, res) => {
    res.render('meals', {title: 'Travlr Getaways'});
};

module.exports = {
    meals
}