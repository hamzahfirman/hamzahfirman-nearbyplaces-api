//Author: Hamzah M. Firman
//Class : ISTA 330 - Advanced Web Design
//Assignment: Project 2 
//Date  : 12/13/20

const express = require('express');
const app = express();
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
    response.json(data.businessesInStates);
})
// METHOD: GET
app.get('/search/:searchTerm/:location' , (request, response) => {
let searchBusiness = request.params.searchTerm;
let searchLocation = request.params.location;

let foundBusiness = data.businessesInStates.businesses.find(x => ((x.town.toLowerCase() === searchLocation.toLowerCase()) 
&& (x.name.toLowerCase() === searchBusiness.toLowerCase())));
if(foundBusiness) {
    response.json(foundBusiness);
}
else{
    response.status(404).json({error: `The searched info could not be found.`})
}

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

    //Stores the given data from a user in JSON 
    data.scores.push({
        name:name, 
        address: address + ", " + town + ", " + state + " " + zip,
        categories: categories,
        cost: cost,
        hours: hours,
        link: link,
        place: place,
        reviews: reviews,
        type: type,
        website: website,
        totalReviews: totalReviews
    });
    response.json({message:'a new business added successfully.'})
});

// METHOD: POST
app.post('/review/:placeId', (request, response) =>{
    let username = request.body.username;
    let review   = request.body.review;
    let placeId  = request.params.placeId;

    let aBusiness = data.businessesInStates.businesses.find(x => (x.id === Number(placeId)));


    aBusiness.reviews.push({
        username: username,
        review: review
    });
    response.json({message:`a new review for ${aBusiness.name} added successfully.`})


});

app.listen(port, () => {
    console.log(`near API listening on port ${port}!`)
});
