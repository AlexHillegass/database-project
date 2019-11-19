USE Backend

-- 2 Super Admins with accompanying universities
INSERT INTO Users (userID, first_name, last_name, emailAdd, pass, clearance) VALUES (1, 'Spencer', 'Fuentes', 'SF@gmail.com', 'password', 2);
INSERT INTO Universities (univID, univName, creatorID, student_Count, univ_Desc, univAddress) VALUES (1, 'University of Central Flerda', 1, 60000, 'A place to go rack up that student debt!', '4000 Central Flerda Blvd, Orlando, FL 32816')
INSERT INTO UnivMemberships (univID, userID) VALUES (1, 1);

INSERT INTO Users (userID, first_name, last_name, emailAdd, pass, clearance) VALUES (2, 'Daniel', 'Martel', 'dannyboi@hotmailcom', 'Password', 2);
INSERT INTO Universities (univID, univName, creatorID, student_Count, univ_Desc, univAddress) VALUES (2, 'University of Science', 2, 15000, 'A place which has flashy lights and big red buttons!', '1234 Some St, Citysville, ST 56789')
INSERT INTO UnivMemberships (univID, userID) VALUES (2, 2);

-- 3 admins, then a few students
INSERT INTO Users (userID, first_name, last_name, emailAdd, pass, clearance) VALUES (3, 'Alex', 'Hillegass', 'ah@rhogamma.net', 'p@ssword', 1);
INSERT INTO UnivMemberships (univID, userID) VALUES (2, 3);

INSERT INTO Users (userID, first_name, last_name, emailAdd, pass, clearance) VALUES (4, 'Anton', 'Strickland', 'jas@google.com', 'Passphrase', 1);
INSERT INTO UnivMemberships (univID, userID) VALUES (2, 4);

INSERT INTO Users (userID, first_name, last_name, emailAdd, pass, clearance) VALUES (5, 'Bob', 'Smith', 'generic@yahoo.com', 'passcode', 1);
INSERT INTO UnivMemberships (univID, userID) VALUES (1, 5);

INSERT INTO Users (userID, first_name, last_name, emailAdd, pass, clearance) VALUES (6, 'Syanne', 'Dawes', 'lawyer@gotham.org', 'L33tHax', 0);
INSERT INTO UnivMemberships (univID, userID) VALUES (2, 6);

INSERT INTO Users (userID, first_name, last_name, emailAdd, pass, clearance) VALUES (7, 'Ginger', 'Loyd', 'gingiel@bottle.net', 'Please', 0);
INSERT INTO UnivMemberships (univID, userID) VALUES (1, 7);

INSERT INTO Users (userID, first_name, last_name, emailAdd, pass, clearance) VALUES (8, 'Jane', 'Doe', 'generic@knights.ucf.edu', 'Open_Sesame', 0);
INSERT INTO UnivMemberships (univID, userID) VALUES (1, 8);

INSERT INTO Users (userID, first_name, last_name, emailAdd, pass, clearance) VALUES (9, 'Rachel', 'Lenay', 'rlenay@gmail.com', 'P@$$W0rd', 0);
INSERT INTO UnivMemberships (univID, userID) VALUES (2, 9);

INSERT INTO Users (userID, first_name, last_name, emailAdd, pass, clearance) VALUES (10, 'Dallas', 'Russel', 'rustyrussel@knights.ucf.edu', 'LetMeIn', 0);
INSERT INTO UnivMemberships (univID, userID) VALUES (1, 10);

INSERT INTO Users (userID, first_name, last_name, emailAdd, pass, clearance) VALUES (11, 'Dianne', 'Pearson', 'dpiercen@rhogamma.net', 'DogName', 0);
INSERT INTO UnivMemberships (univID, userID) VALUES (1, 11);

INSERT INTO Users (userID, first_name, last_name, emailAdd, pass, clearance) VALUES (12, 'Kara', 'Bowen', 'catlady@google.com', 'CatName', 0);
INSERT INTO UnivMemberships (univID, userID) VALUES (1, 12);

-- Displays all users and the membership table for the universities
SELECT * FROM Users;
SELECT * FROM UnivMemberships;