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
       res.SendState(500) 
    })
});


router.get('/reviews', (req, res) => {
    const sqlQuery = `SELECT *FROM "travel_page_reviews";
`;
    pool.query(sqlQuery).then(result => {
        console.log('Result', result.rows);
        res.send(result.rows)
    }).catch(err => {
        console.log('Error in GET', err);
        res.SendState(500)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;