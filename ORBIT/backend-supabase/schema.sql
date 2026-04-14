-- Supabase Schema

-- Create users table
CREATE TABLE users (
    id serial PRIMARY KEY,
    username varchar(50) NOT NULL UNIQUE,
    email varchar(255) NOT NULL UNIQUE,
    password varchar(255) NOT NULL,
    created_at timestamp with time zone DEFAULT current_timestamp
);

-- Create transactions table
CREATE TABLE transactions (
    id serial PRIMARY KEY,
    user_id int REFERENCES users (id),
    amount decimal(10, 2) NOT NULL,
    transaction_date timestamp with time zone DEFAULT current_timestamp
);

-- Add more tables as necessary...