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

router.get("/traveldetails/:id", (req, res) => {
    let travelPageId = req.params.id
    const sqlQuery = `SELECT * FROM "travel_page"
JOIN "travel_page_reviews" ON "travel_page_reviews".travel_page_id = "travel_page".id
WHERE "travel_page".id = $1;`;
    pool.query(sqlQuery, [travelPageId]).then(result => {
        console.log('Result', result.rows);
        res.send(result.rows)
    }).catch(err => {
        console.log('Error in GET', err);
        res.SendStatus(500)
    })
});



router.get("/updatetraveldetails/:id", (req, res) => {
    if (req.isAuthenticated()) {
        console.log('is authenticated?', req.isAuthenticated());
        console.log('user', req.user);
        console.log('req.user:', req.user);
        let travelPageId = req.params.id
        const sqlQuery = `SELECT * FROM "travel_page"
JOIN "travel_page_reviews" ON "travel_page_reviews".travel_page_id = "travel_page".id
JOIN "user" ON "user".id = "travel_page_reviews".user_id
WHERE "travel_page".id = $1
AND "user".id = $2;`;
        pool.query(sqlQuery, [travelPageId, req.user.id]).then(result => {
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
    if (req.isAuthenticated()) {
        console.log('is authenticated?', req.isAuthenticated());
        console.log('user', req.user);
        console.log('req.user:', req.user);
        let destination = req.body
        let sqlText = `INSERT INTO "travel_page_reviews" (
                        "experience_comment",
                        "safety_rating",
                        "english_rating",
                        "cost_rating",
                        "friendly_rating" ,
                        "reconmend_rating" ,
                        "travel_page_id" ,
                        "user_id" ,
                        "coworking_space_name" ,
                        "coworking_space_address" ,
                        "coworking_space_city" ,
                        "coworking_space_country",
                        "coworking_space_zip" 
)
VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13);`

        pool.query(sqlText, [
            destination.experience_comment,
            destination.safety_rating,
            destination.english_rating,
            destination.cost_rating,
            destination.friendly_rating,
            destination.reconmend_rating,
            destination.travel_page_id,
            req.user.id,
            destination.coworking_space_name,
            destination.coworking_space_address,
            destination.coworking_space_city,
            destination.coworking_space_country,
            destination.coworking_space_zip,
         ])
            .then(() => {
                res.sendStatus(201);
            })
            .catch((err) => {
                console.log('Error POST', err);
                res.sendStatus(500);
            });
    }
    else {
        res.sendStatus(403)
    }
});



module.exports = router;