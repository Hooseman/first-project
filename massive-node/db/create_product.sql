-- This query will need to take the 4 parameters defined in the schema and insert a record into the database.
INSERT INTO products (name, description, price, imageurl)
VALUES ($1, $2, $3, $4)
