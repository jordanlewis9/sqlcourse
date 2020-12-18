-- CREATE TABLE users (
--   email VARCHAR(255) PRIMARY KEY,
--   created_at TIMESTAMP DEFAULT NOW()
-- );

-- INSERT INTO users (email) VALUES
-- ('Katie34@yahoo.com'), ('Tunde@gmail.com');

-- SELECT DATE_FORMAT(MIN(created_at), '%M %D %Y') as earliest_date FROM users;
-- SELECT email, created_at FROM users WHERE created_at = (SELECT MIN(created_at) FROM users);

-- SELECT DATE_FORMAT(created_at, '%M') AS month, COUNT(*) AS count 
--   FROM users
--   GROUP BY month
--   ORDER BY count DESC;

-- SELECT COUNT(*) AS yahoo_users FROM users WHERE email LIKE '%yahoo.com';

-- SELECT COUNT(*) AS total_users,
--   CASE
--     WHEN email LIKE '%gmail.com' THEN 'gmail'
--     WHEN email LIKE '%yahoo.com' THEN 'yahoo'
--     WHEN email LIKE '%hotmail.com' THEN 'hotmail'
--     ELSE 'other'
--   END AS 'provider'
-- FROM users
-- GROUP BY provider
-- ORDER BY total_users DESC;