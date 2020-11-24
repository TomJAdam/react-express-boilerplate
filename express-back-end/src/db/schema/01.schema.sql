DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS gigs CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS conversations CASCADE;
DROP TABLE IF EXISTS messages CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  province VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  avatar_img TEXT NOT NULL,
  bio TEXT NOT NULL,
  education TEXT NOT NULL
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  img TEXT NOT NULL
);

CREATE TABLE gigs (
  id SERIAL PRIMARY KEY NOT NULL,
  contractor_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,

  title TEXT NOT NULL,
  price INTEGER NOT NULL DEFAULT 0,
  description TEXT NOT NULL,
  photo_one TEXT NOT NULL,
  photo_two TEXT NOT NULL,
  photo_three TEXT NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  gig_id INTEGER REFERENCES gigs(id) ON DELETE CASCADE,
  client_id INTEGER REFERENCES users(id) ON DELETE CASCADE,

  rating INTEGER NOT NULL,
  review TEXT NOT NULL,
  status VARCHAR(255) NOT NULL,
  order_date TIMESTAMP,
  finished_date DATE NOT NULL
);

CREATE TABLE conversations (
  id SERIAL PRIMARY KEY NOT NULL,
  client_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  contractor_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  conversation_id INTEGER REFERENCES conversations(id) ON DELETE CASCADE,
  sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  text VARCHAR(255) NOT NULL
);