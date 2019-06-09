const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



router.get('/', (req, res) => {
    const sqlQuery = `SELECT "travel_page".image,"travel_page".city,"travel_page".id,"travel_page".country,  AVG("travel_page_reviews".reconmend_rating), COUNT("travel_page_reviews".reconmend_rating) AS "count" FROM "travel_page"
JOIN "travel_page_reviews" ON "travel_page_reviews".travel_page_id = "travel_page".id
GROUP BY "travel_page".image, "travel_page".city,"travel_page".country, "travel_page".id, "travel_page"
;`;
    pool.query(sqlQuery).then(result => {
        console.log('Result', result.rows);
        res.send(result.rows)
    }).catch(err => {
        console.log('Error in GET', err);
        res.SendStatus(500)
    })
});

router.get('/favorites', (req, res) => {
    const sqlQuery = `SELECT * FROM "favorites"
JOIN "travel_page" ON "travel_page".id = "favorites".travel_page_id
JOIN "user" ON "user".id = "favorites".user_id
AND "user".id= $1;`;
    pool.query(sqlQuery, [req.user.id]).then(result => {
        console.log('Result', result.rows);
        res.send(result.rows)
    }).catch(err => {
        console.log('Error in GET', err);
        res.SendStatus(500)
    })
});

router.get('/average', (req, res) => {
    const sqlQuery = `SELECT AVG("reconmend_rating") FROM "travel_page_reviews"
`;
    pool.query(sqlQuery).then(result => {
        console.log('Result', result.rows);
        res.send(result.rows)
    }).catch(err => {
        console.log('Error in GET', err);
        res.SendStatus(500)
    })
});

router.get("/travelreviewdetails/:id", (req, res) => {
    let travelPageId = req.params.id
    const sqlQuery = `SELECT AVG("travel_page_reviews".english_rating) AS "english_rating", AVG("travel_page_reviews".safety_rating) AS "safety_rating", AVG("travel_page_reviews".friendly_rating) AS "friendly_rating", AVG("travel_page_reviews".reconmend_rating) AS "reconmend_rating" ,AVG("travel_page_reviews".cost_rating) AS "cost_rating" FROM "travel_page"
JOIN "travel_page_reviews" ON "travel_page_reviews".travel_page_id = "travel_page".id
WHERE "travel_page".id = $1
;`
    pool.query(sqlQuery, [travelPageId]).then(result => {
        console.log('Result', result.rows);
        res.send(result.rows)
    }).catch(err => {
        console.log('Error in GET', err);
        res.SendStatus(500)
    })
});


router.get("/traveldetails/:id", (req, res) => {
    let travelPageId = req.params.id
    console.log('travelPageId', travelPageId);

    const sqlQuery = `SELECT * FROM "travel_page"
WHERE id = $1;`;
    pool.query(sqlQuery, [travelPageId]).then(result => {
        console.log('Result', result.rows);
        res.send(result.rows)
    }).catch(err => {
        console.log('Error in GET', err);
        res.SendStatus(500)
    })
});

router.get("/addreviewpage/:id", (req, res) => {
    let travelPageId = req.params.id
    console.log('travelPageId', travelPageId);

    const sqlQuery = `SELECT * FROM "travel_page"
WHERE id = $1;`;
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
        const sqlQuery = `SELECT "travel_page_reviews".* , "travel_page".image, "travel_page".city, "travel_page".country FROM "travel_page_reviews"
JOIN "travel_page" ON "travel_page".id = "travel_page_reviews".travel_page_id
JOIN "user" ON "user".id = "travel_page_reviews".user_id
WHERE "user".id = $1 ; ;
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


router.post('/addtravel', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('is authenticated?', req.isAuthenticated());
        console.log('user', req.user);
        console.log('req.user:', req.user);
        let destination = req.body
        let addTravelSqlText = `INSERT INTO "travel_page" ("city", "country","continent", "image", "user_id" ) 
VALUES ($1, $2, $3, $4, $5)
RETURNING "travel_page".id;
`
        let addReviewSqlText = `INSERT INTO "travel_page_reviews" (
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

        pool.query(addTravelSqlText, [destination.city, destination.country, destination.continent, destination.image, req.user.id])
            .then((result) => {
                console.log('result POST', result.rows[0].id);
                pool.query(addReviewSqlText, [
                    destination.experience_comment,
                    destination.safety_rating,
                    destination.english_rating,
                    destination.cost_rating,
                    destination.friendly_rating,
                    destination.reconmend_rating,
                    result.rows[0].id,
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
            })
            .catch((err) => {
                console.log('Error POST AddTravel', err);
                res.sendStatus(500);
            });
    }
    else {
        res.sendStatus(403)
    }
});

router.post('/favorite', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('is authenticated?', req.isAuthenticated());
        console.log('user', req.user);
        console.log('req.user:', req.user);
        let favoriteId = req.body
        console.log('POST HEART', favoriteId, req.user.id );
        const sqlQuery = `
         INSERT INTO "favorites" ("travel_page_id", "user_id") 
VALUES ($1, $2);
    `;
        pool.query(sqlQuery, [favoriteId.travel_page_id, req.user.id])
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


router.delete ('/favorite/:id', (req, res) => {
    let deleteId = req.params.id
    console.log('DELETE', deleteId);
    const sqlQuery = `
         DELETE FROM "favorites"
WHERE "favorites".travel_page_id = $1
AND "favorites".user_id = $2;`
    pool.query(sqlQuery, [deleteId, req.user.id]).then(result => {
        console.log('Result', result.rows);
        res.sendStatus(201)
    }).catch(err => {
        console.log('Error in GET', err);
        res.SendStatus(500)
    })
});

            

router.delete('/:id', (req, res) => {

    let deleteId = req.params.id
    const sqlQuery = `
         DELETE FROM "travel_page_reviews"
WHERE "travel_page_reviews".id = $1
AND "travel_page_reviews".user_id = $2;
    `;
    pool.query(sqlQuery, [deleteId, req.user.id]).then(result => {
        console.log('Result', result.rows);
        res.send(result.rows)
    }).catch(err => {
        console.log('Error in GET', err);
        res.SendStatus(500)
    })
});

router.put('/:id', (req, res) => {

    let putId = req.params.id
    console.log('putId', putId);

    let putBodyId = req.body
    console.log('putBodyId', putBodyId);

    const sqlQuery = `
         UPDATE "travel_page_reviews"
            SET "experience_comment"= $1,
            "safety_rating" = $2,
            "english_rating"= $3,
            "cost_rating"= $4,
            "friendly_rating"= $5 ,
            "reconmend_rating"= $6 ,
            "coworking_space_name"= $7,
            "coworking_space_address"= $8,
            "coworking_space_city"= $9 ,
            "coworking_space_country"= $10,
            "coworking_space_zip"= $11
        WHERE  "travel_page_id"= $12
        AND "user_id"= $13;
    `;
    pool.query(sqlQuery,
        [
            putBodyId.experience_comment,
            putBodyId.safety_rating,
            putBodyId.english_rating,
            putBodyId.cost_rating,
            putBodyId.friendly_rating,
            putBodyId.reconmend_rating,
            putBodyId.coworking_space_name,
            putBodyId.coworking_space_address,
            putBodyId.coworking_space_city,
            putBodyId.coworking_space_country,
            putBodyId.coworking_space_zip,
            putId,
            req.user.id
        ])
        .then(result => {
            console.log('Result', result.rows);
            res.sendStatus(200)
        }).catch(err => {
            console.log('Error in PUT', err);
            res.SendStatus(500)
        })
});


module.exports = router;