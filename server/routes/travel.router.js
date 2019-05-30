const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    const sqlQuery = `SELECT * FROM "travel_page"`;
    pool.query(sqlQuery).then(result =>{
        console.log('Result', result.rows);
        res.send(result.rows)
    }).catch (err =>{
        console.log('Error in GET', err);
       res.SendStatus(500) 
    })
});


router.get('/reviews', (req, res) => {
    let placeID = req.query.id
    console.log('REVIEWS', placeID);
    
    const sqlQuery = `SELECT * FROM "travel_page"
JOIN "travel_page_reviews" ON "travel_page_reviews".travel_page_id = "travel_page".id;
`
    pool.query(sqlQuery).then(result => {
        console.log('Result', result.rows);
        res.send(result.rows)
    }).catch(err => {
        console.log('Error in GET Reviews', err);
        res.SendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;