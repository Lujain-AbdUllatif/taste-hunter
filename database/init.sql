BEGIN;

DROP TABLE IF EXISTS cookers,
dishes, users CASCADE;

CREATE TABLE cookers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(50) NOT NULL,
  work_address VARCHAR(255) NOT NULL
);

CREATE TABLE dishes (
  id SERIAL PRIMARY KEY,
  cooker_id INTEGER REFERENCES cookers(id),
  name VARCHAR(100) NOT NULL,
  description  TEXT,
  price INTEGER  NOT NULL,
  category VARCHAR(100) NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(50) NOT NULL
);

INSERT INTO cookers (name, email, password, work_address)
VALUES (
    'Sery1976',
    'Sery1976@mail.com',
    '123123',
    'Middlehill, UK'
  ),
  (
    'Notne1991',
    'Notne1991@mail.com',
    '123123',
    'Sunipol, UK'
  ),
  (
    'Moull1990',
    'Moull1990@mail.com',
    '123123',
    'Wanlip, UK'
  ),
  (
    'Spont1935',
    'Spont1935@mail.com',
    '123123',
    'Saxilby, UK'
  ),
  (
    'Precand',
    'Precand@mail.com',
    '123123',
    'Stanton, UK'
  );



INSERT INTO dishes ( name, description, price, category,cooker_id)
VALUES (
    'Hamburger',
    'Two fresh high-quality beef patties hot off the grill, on a soft, toasted bun.',
        9,
    'burger',
    1
  ),
  (
   'Cheeseburger',
      'Our regular two-patty burger with two slices of melted American cheese added.',
        8,
    'burger',
    2
  ),
  (
    'Bacon Burger',
      'Our regular two-patty burger layered with two strips of crispy, sweet apple-wood smoked bacon.',
        9,
     'burger',
   3
  ),
  (
    'Bacon Cheeseburger',
      'Our regular two patty-burger with two strips of crispy apple-wood smoked bacon and two slices of melted American cheese.',
     9,
    'burger',
    4
  ),
  (
     'Little Hamburger',
      'One fresh high-quality patty hot off the grill, on a soft, toasted bun.',
     9,
    'burger',
    5
  )
  ;

INSERT INTO users ( email, password)
VALUES (
    'Seren@mail.com',
    '123123'
  ),
  (
    'Noterdam@mail.com',
    '123123'
  ),
  (
    'Mouris@mail.com',
    '123123'
  ),
  (
    'Sport@mail.com',
    '123123'
  ),
  (
    'Prens@mail.com',
    '123123'
  );

COMMIT;