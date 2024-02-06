  CREATE TABLE IF NOT EXISTS profile (
  id SERIAL PRIMARY KEY ,
  clerk_user_id VARCHAR(255) NOT NULL,
  username VARCHAR(100) NOT NULL,
  bio VARCHAR(750) NOT NULL
  );
https://quebit.com/askquebit/sql-server-image-and-varbinary-data-types/


  /*INSERT INTO profile (id,username,bio) VALUES('1','Darwin','Photographer');
  INSERT INTO profile (id,username,bio) VALUES('2','Laura','Illustrator');
  INSERT INTO profile (id,username,bio) VALUES('3','Nelson','Teacher');
  INSERT INTO profile (id,username,bio) VALUES('4','Andy','Artist');
  INSERT INTO profile (id,username,bio) VALUES('5','Amirson','Doctor');*/

 /* ALTER TABLE post
ADD image  BLOB;*/

  /*INSERT INTO Post(id,title,content,profile_id) VALUES('1','Photography','Scenery','1');
  INSERT INTO Post(id,title,content,profile_id) VALUES('2','Illustrations','Childrens Book','2');
  INSERT INTO Post(id,title,content,profile_id) VALUES('3','Friendly advice','Friendly advice','3');
  INSERT INTO Post(id,title,content,profile_id) VALUES('4','Paintings','Eye-Catching','4');
  INSERT INTO Post(id,title,content,profile_id) VALUES('5','Live Well','Advice from experiences','5');*/

 CREATE TABLE IF NOT EXISTS profile (
  id SERIAL PRIMARY KEY ,
  clerk_user_id VARCHAR(255) NOT NULL,
  profile_name VARCHAR(100) NOT NULL,
  bio VARCHAR(750) NOT NULL
  );
 

  CREATE TABLE IF NOT EXISTS Post (
  id SERIAL PRIMARY KEY ,
  title VARCHAR(255) NOT NULL,
  content VARCHAR(750) NOT NULL,
  profile_name text REFERENCES profile(profile_name)
  );

    CREATE TABLE IF NOT EXISTS post_likes (
   profile_name text REFERENCES post(profile_name),
   post_id INTEGER REFERENCES post(id)
  );

   CREATE TABLE IF NOT EXISTS likes (
   likes_count INTEGER 
  );

   CREATE TABLE IF NOT EXISTS comment (
   id SERIAL PRIMARY KEY ,
  profile_name text REFERENCES post(profile_name),
  content VARCHAR(750) NOT NULL,
  post_id INTEGER REFERENCES post(post_id)
  );

    CREATE TABLE IF NOT EXISTS comment_likes (
   profile_name text REFERENCES post(profile_name),
   comment_id INTEGER REFERENCES post(id)
  );

    CREATE TABLE IF NOT EXISTS follows (
   follower_name text,
   followee_name text
  );

ALTER TABLE profile DROP CONSTRAINT id;

ALTER TABLE <table_name> DROP CONSTRAINT <table_name>_pkey;

DROP TABLE table_name CASCADE;

