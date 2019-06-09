

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "travel_page_reviews"
(
    "id" SERIAL PRIMARY KEY,
    "experience_comment" VARCHAR(255),
    "safety_rating" INT NOT NULL,
    "english_rating" INT NOT NULL,
    "cost_rating" INT NOT NULL,
    "friendly_rating" INT NOT NULL,
    "reconmend_rating" INT NOT NULL,
    "places_id" INT REFERENCES  "travel_page",
    "user_id" INT REFERENCES  "user",
    "coworking_space_name" VARCHAR (30),
    "coworking_space_address" VARCHAR (50),
    "coworking_space_city" VARCHAR (30),
    "coworking_space_country" VARCHAR (15),
    "coworking_space_zip" INT
);

CREATE TABLE "travel_page"
(
    "id" SERIAL PRIMARY KEY,
    "city" VARCHAR(20),
    "country" VARCHAR(20),
    "continent" VARCHAR(20),
    "image" VARCHAR(255)
);

CREATE TABLE "favorites"
(
    "id" SERIAL PRIMARY KEY,
    "places_id" INT REFERENCES "travel_page",
    "user_id" INT REFERENCES "user"
);

CREATE TABLE "image_header"
(
    "id" SERIAL PRIMARY KEY,
    "image_url" VARCHAR(255)
);
