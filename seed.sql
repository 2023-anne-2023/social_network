  CREATE TABLE IF NOT EXISTS profile (
  id INT PRIMARY KEY NOT NULL,
  clerk_user_id VARCHAR(255) NOT NULL,
  username VARCHAR(100) NOT NULL
  bio VARCHAR(750) NOT NULL,
  );
 
  CREATE TABLE IF NOT EXISTS Post (
  id INT PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  content VARCHAR(750) NOT NULL,
  profile_id INTEGER REFERENCES profile(id)
  );

    CREATE TABLE IF NOT EXISTS comment (
  id INT PRIMARY KEY NOT NULL,
  profile_id INTEGER REFERENCES profile(id),
  content VARCHAR(750) NOT NULL,
  post_id INTEGER REFERENCES post(id)
  );

    CREATE TABLE IF NOT EXISTS post_likes (
   profile_id INTEGER REFERENCES profile(id),
   post_id INTEGER REFERENCES post(id)
  );

    CREATE TABLE IF NOT EXISTS comment_likes (
   profile_id INTEGER REFERENCES profile(id),
   post_id INTEGER REFERENCES post(id)
  );

    CREATE TABLE IF NOT EXISTS follows (
   follower_id INT PRIMARY KEY NOT NULL,
   followee_id INTEGER 
  );

