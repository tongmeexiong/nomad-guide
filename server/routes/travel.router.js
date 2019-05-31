const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



router.get('/', (req, res) => {
    const sqlQuery = `SELECT * FROM "travel_page"`;
    pool.query(sqlQuery).then(result => {
        console.log('Result', result.rows);
        res.send(result.rows)
    }).catch(err => {
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

router.get('/userreview', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('is authenticated?', req.isAuthenticated());
        console.log('user', req.user);
        console.log('req.user:', req.user);
        const sqlQuery = `SELECT * FROM "travel_page"
JOIN "travel_page_reviews" ON "travel_page_reviews".travel_page_id = "travel_page".id
JOIN "user" ON "user".id = "travel_page_reviews".user_id
WHERE "user".id = $1;
`;
        pool.query(sqlQuery, [req.user.id]).then(result => {
            console.log('Result', result.rows);
            res.send(result.rows)
        }).catch(err => {
            console.log('Error in GET', err);
            res.SendStatus(500)
        });
    }
    else {
        res.sendStatus(403)
    }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

})



module.exports = router;