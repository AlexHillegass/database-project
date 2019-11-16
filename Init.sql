/* An initialization query for the backend databases */
--CREATE DATABASE Backend

USE [Backend]

/*============================== Base Tables ==============================*/
-- Clearance in lieu of individual user/admin/super_admin tables
CREATE TABLE Users (
	userID INTEGER,
	first_name VARCHAR(32),
	last_name VARCHAR(48),
	emailAdd VARCHAR(48),
	pass VARCHAR(128),
	clearance INTEGER,
	PRIMARY KEY (userID)
);

CREATE TABLE Universities (
	univID INTEGER,
	univName VARCHAR(64),
	creatorID INTEGER,
	PRIMARY KEY (univID)
);

CREATE TABLE RSOEvents (
	eventID INTEGER,
	eventRating INTEGER,
	eventName VARCHAR(128),
	category VARCHAR(32),
	descript TEXT,
	eventDate DATETIME,
	venue VARCHAR(128),
	vAddress VARCHAR(128),
	latitude FLOAT,
	longitude FLOAT,
	PRIMARY KEY (eventID)
);

CREATE TABLE SiteEvents (
	eventID INTEGER,
	eventRating INTEGER,
	eventName VARCHAR(128),
	category VARCHAR(32),
	descript TEXT,
	eventDate DATETIME,
	eventType VARCHAR(32),
	venue VARCHAR(128),
	vAddress VARCHAR(128),
	latitude FLOAT,
	longitude FLOAT,
	isApproved BIT,
	PRIMARY KEY (eventID)
);

CREATE TABLE RSOs (
	rsoID INTEGER,
	rsoName VARCHAR,
	ownerID INTEGER,
	approved BIT,
	PRIMARY KEY (rsoID)
);


/*============================== Memberships ==============================*/
CREATE TABLE RSOMemberships (
	rsoID INTEGER,
	userID INTEGER,
	FOREIGN KEY (rsoID) REFERENCES RSOs (rsoID),
	FOREIGN KEY (userID) REFERENCES Users (userID)
);

CREATE TABLE UnivMemberships (
	univID INTEGER,
	userID INTEGER,
	FOREIGN KEY (univID) REFERENCES Universities (univID),
	FOREIGN KEY (userID) REFERENCES Users (userID)
);

/*============================== Event Relations ==============================*/
CREATE TABLE UserEventOwners (
	userID INTEGER,
	eventID INTEGER,
	FOREIGN KEY (userID) REFERENCES Users (userID),
	FOREIGN KEY (eventID) REFERENCES SiteEvents (EventID)
);

CREATE TABLE EventApprovers (
	userID INTEGER,
	eventID INTEGER,
	FOREIGN KEY (userID) REFERENCES Users (userID),
	FOREIGN KEY (eventID) REFERENCES SiteEvents (EventID)
)

CREATE TABLE Comments (
	commentID INTEGER,
	userID INTEGER,
	eventID INTEGER,
	comment TEXT,
	submitted DATETIME,
	PRIMARY KEY (commentID),
	FOREIGN KEY (userID) REFERENCES Users (userID),
	FOREIGN KEY (eventID) REFERENCES SiteEvents (EventID)
);

CREATE TABLE RSOEventOwners (
	rsoID INTEGER,
	eventID INTEGER,
	FOREIGN KEY (rsoID) REFERENCES RSOs (rsoID),
	FOREIGN KEY (eventID) REFERENCES RSOEvents (eventID)
);

CREATE TABLE RSOComments (
	commentID INTEGER,
	userID INTEGER,
	eventID INTEGER,
	comment TEXT,
	submitted DATETIME,
	PRIMARY KEY (commentID),
	FOREIGN KEY (userID) REFERENCES Users (userID),
	FOREIGN KEY (eventID) REFERENCES RSOEvents (EventID)
);