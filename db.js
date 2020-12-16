'use strict';

require('dotenv').config();
const { Pool } = require('pg');


const postgreConnectionString =
    `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DATABASE}`;

console.log(postgreConnectionString);

const postgrePool = new Pool({
    connectionString: process.env.DATABASE_URL ? process.env.DATABASE_URL : postgreConnectionString,
    ssl: { rejectUnauthorized: false }
});

function getPlaces() {
    return postgrePool.query('select * from nearbyplaces.place')
    .then(result => {
        console.log(result);
        if (result.rows) {
            return result.rows;
        } else {
            throw Error('The places could not be found in the database.');
        }
    });
}

function getReviews(id) {
    return postgrePool.query('select * from nearbyplaces.review where placeid like $1,', [id])
    .then(result => {
        console.log(result);
        if (result.rows) {
            return result.rows;
        } else {
            throw Error('The places could not be found in the database.');
        }
    });
}



function savePlace(name, address, category, phone, hours, town, state, totalreview, price, website, link) {
    return postgrePool.query('INSERT into nearbyplaces.place (name, address, category, phone, hours, town, state, totalreview, price, website, link) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) returning id', [name, address, category, phone, hours, town, state, totalreview, price, website, link])
        .then(x => x.rows);
}

function saveReview(username, rating, comment, placeid) {
    return postgrePool.query('INSERT into nearbyplaces.review (username, rating, comment, placeid) values ($1, $2, $3, $4) returning id', [username, rating, comment, placeid])
        .then(x => x.rows);
}

function addTotalReview(placeid){
    return postgrePool.query('UPDATE nearbyplaces.place set totalreview = totalreview + 1 where placeid = $1', [placeid])
    .then(x => x.rows);
}


function getSearchedPlace(place, town) {
    return postgrePool.query('SELECT * from nearbyplaces.place where name like $1 and town like $2', [place, town])
        .then(result => {
            console.log(result);
            if (result.rows) {
                return result.rows;
            } else {
                throw Error('The place is not found in the database.');
            }
        });
}

module.exports = { getPlaces, savePlace, saveReview, getSearchedPlace, addTotalReview, getReviews }