//const res = require('express/lib/response');
const mongoose = require('mongoose');
const Model = mongoose.model('trips');

// GET: /trips - list all the trips
const tripsList = async (req, res) => {
    Model.find({}).exec((err, trips) => { // empty filter for all trips
            if(!trips) {
                return res.status(404).json({"message": "trip not found"});
            } else if(err) {
                return res.status(404).json(err);
            } else {
                return res.status(200).json(trips);
            }
        });
};

// GET: /trips/:tripCode - returns a single trip
const tripsFindCode = async (req, res) => {
    Model.find({'code': req.params.tripCode}).exec((err, trip) => { // empty filter for all trips
            if(!trip) {
                return res.status(404).json({"message": "trip not found"});
            } else if(err) {
                return res.status(404).json(err);
            } else {
                return res.status(200).json(trip);
            }
        });
};

module.exports = {
    tripsList,
    tripsFindCode
};