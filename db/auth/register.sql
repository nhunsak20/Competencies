INSERT INTO users (username, password) VALUES (${user}, ${hash})
RETURNING *;