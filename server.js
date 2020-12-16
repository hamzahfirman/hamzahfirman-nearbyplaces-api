//Author: Hamzah M. Firman
//Class : ISTA 330 - Advanced Web Design
//Assignment: Project 2 
//Date  : 12/13/20

const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const db = require('./db');

const cors = require('cors');
const bodyParser = require('body-parser');// Converts into JSON 

app.use(cors());
app.use(bodyParser.json());


// METHOD: GET
app.get('/' , (request, response) => {
    response.send("Welcome to My Near By Places API!");
})
// METHOD: GET
app.get('/places' , (request, response) => {
    db.getPlaces().then(x => response.json(x));
})
// METHOD: GET
app.get('/reviews/:placeid' , (request, response) => {
    let placeid = request.params.placeid;
    db.getReviews(placeid).then(x => response.json(x));
})
// METHOD: GET
app.get('/search/:searchTerm/:location' , (request, response) => {

    let searchBusiness = request.params.searchTerm.substring(0,1).toUpperCase() + 
    request.params.searchTerm.substring(1).toLowerCase()
    let searchLocation = request.params.location.substring(0,1).toUpperCase() + 
    request.params.location.substring(1).toLowerCase();


    db.getSearchedPlace("%"+searchBusiness+"%","%"+ searchLocation+"%").then(x => response.json(x));


})
// METHOD: POST
app.post('/place', (request, response) => {

    try{
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
    let phone           = request.body.phone;

    //Stores the given data from a user using a query function in db.js to 
    // 'place' table in postgres
    
    db.savePlace(name, address, type, phone, hours, 
    town, state, totalReviews, cost, website, link).then(x => response.json({message: 'The place is succesfully added.'}));

    }catch (e){
        console.log(e.message);
        request.status(500).send('Server Error');
    }
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
