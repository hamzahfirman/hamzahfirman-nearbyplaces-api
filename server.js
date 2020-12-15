//Author: Hamzah M. Firman
//Class : ISTA 330 - Advanced Web Design
//Assignment: Project 2 
//Date  : 12/13/20

const express = require('express');
const app = express();
var db = require('./db');
var cors = require('cors'); // This gives access to public (whoever wants to use this API)
var data = require('./data');
var bodyParser = require('body-parser');
const port = process.env.PORT || 3003; //'process.env.PORT' - Needed for production where a host can choose 
                                       // its own preference PORT for this API (Detail: Reads 'env' file and 
                                       // looks for 'PORT' key to get the port number)

// Middlewares
app.use(cors()); 
app.use(bodyParser.json()); // Converts into JSON 
app.use(express.urlencoded({extended: true}));


// METHOD: GET
app.get('/' , (request, response) => {
    response.send("Welcome to My Near By Places API!");
})
// METHOD: GET
app.get('/places' , (request, response) => {
    db.getPlaces().then(x => response.json(x));
})
// METHOD: GET
app.get('/search/:searchTerm/:location' , (request, response) => {

    let searchBusiness = request.params.searchTerm;
    let searchLocation = request.params.location.substring(0,1).toUpperCase() + 
    request.params.location.substring(1).toLowerCase();


    db.getSearchedPlace(searchBusiness+"%", searchLocation+"%").then(x => response.json(x));


})
// METHOD: POST
app.post('/place', (request, response) =>{
    let name = request.body.name;
    let address   = request.body.address;
    let town    = request.body.town;
    let state    = request.body.state;
    let zip    = request.body.zip;
    let categories    = request.body.categories;
    let cost    = request.body.cost;
    let hours    = request.body.hours;
    let link    = request.body.link;
    let place    = request.body.place;
    let reviews    = request.body.reviews;
    let type    = request.body.type;
    let website   = request.body.website;
    let totalReviews    = request.body.totalReviews;

    //Stores the given data from a user using a query function in db.js to 
    // 'place' table in postgres
    db.savePlace(name, "" + address +", " + town + ", " + state + ", " + zip, type, phone, hours
    , town, state, totalReviews, cost, website, link).then(x => response.json({message: "The place is succesfully added."}))
});

// METHOD: POST
app.post('/review/:placeId', (request, response) =>{
    let username = request.body.username;
    let review   = request.body.review;
    let placeid  = request.params.placeId;
    let rating   = request.params.rating;
    
    db.addTotalReview(placeid).then(x => response.json({message: "A new total review."}));
    //Stores the given data from a user using a query function in db.js to 
    // 'place' table in postgres
    db.saveReview(username, rating, review, placeid).then(x => response.json({message: "The review is succesfully added for this place."}))

});

app.listen(port, () => {
    console.log(`near API listening on port ${port}!`)
});
