--====================================== Users ====================================================
-- Inserts new user
INSERT INTO Users (userID, first_name, last_name, emailAdd, pass, clearance) VALUES (@userID, @first_name, @last_name, @emailAdd, @pass, @clearance);

-- Updates user info
UPDATE Users SET @field = @value WHERE userID = @userID;

-- Deletes a user
DELETE FROM RSOMemberships WHERE userID = @userID;
DELETE FROM UnivMemberships WHERE userID = @userID;
DELETE FROM Users WHERE userID = @userID;

-- Returns a field of a user
SELECT @field FROM Users WHERE userID = @userID

-- Retrieves password
SELECT pass FROM Users WHERE userID = @userID;

--================================== Universities ===================================
-- Inserts new University
INSERT INTO Universities (univID, univName, creatorID) VALUES (@univID, @univName, @creatorID);

-- Updates University data
UPDATE Universities SET @field = @value WHERE univID = @univID;

-- Deletes a University
DELETE Users FROM Users INNER JOIN UnivMemberships UM ON Users.userID = UM.userID WHERE UM.userID = @userID;
DELETE FROM UnivMemberships WHERE univID = @univID;
DELETE FROM Universities WHERE univID = @univID;

-- Returns a value from University
SELECT @field FROM Universities WHERE univID = @univID;

-- Returns a univID given a userID
SELECT univID FROM UnivMemberships WHERE userID = @userID;

-- Adds a user to a University
INSERT INTO UnivMemberships (univID, userID) VALUES (@univID, @userID);

--================================= RSO Events ============================================
-- Inserts a new RSO event
INSERT INTO RSOEvents (eventID, eventRating, eventName, category, descript, eventDate, venue, vAddress, latitude, longitude) VALUES (@eventID, NULL, @eventName, @category, @descript, @eventDate, @venue, @vAddress, @latitude, @longitude);
INSERT INTO RSOEventOwners (rsoID, eventID) VALUES (@rsoID, @eventID);

-- Updates an RSO event
UPDATE RSOEvents SET @field = @value WHERE eventID = @eventID;

-- Deletes an RSO event
DELETE FROM RSOEvents WHERE eventID = @eventID;

-- Returns a field of an RSO event
SELECT @field WHERE eventID = @eventID

-- Adds an RSO event comment
INSERT INTO RSOComments (userID, eventID, comment) VALUES (@userID, @eventID, @comment);

UPDATE RSOComments SET @field = @value WHERE commentID = @commentID;

-- Deletes an RSO event comment
DELETE FROM RSOComments WHERE commentID = @commentID;

-- Returns a field of an RSO event comment
SELECT @field FROM RSOComments WHERE commentID = @commentID;

--========================== Public/Private Events ==========================
-- Inserts a new public/private event
INSERT INTO SiteEvents (eventID, eventRating, eventName, category, descript, eventDate, eventType, venue, vAddress, latitude, longitude, isApproved) VALUES (@eventID, NULL, @eventName, @category, @descript, @eventDate, @eventType, @venue, @vAddress, @latitude, @longitude, NULL);
INSERT INTO UserEventOwners (userID, eventID) VALUES (@userID, @eventID);

-- Updates a public/private event
UPDATE SiteEvents SET @field = @value WHERE eventID = @eventID;

-- Deletes a public/private event
DELETE FROM SiteEvents WHERE eventID = @eventID;

-- Selects a field from a public/private event
SELECT @field FROM SiteEvents WHERE eventID = @eventID;

-- Creates a Public/Private Event comment
INSERT INTO Comments (userID, eventID, comment) VALUES (@userID, @eventID, @comment);

UPDATE Comments SET @field = @value WHERE commentID = @commentID;

-- Deletes a public/private event comment
DELETE FROM Comments WHERE commentID = @commentID;

-- Returns a field of a public/private event comment
SELECT @field FROM Comments WHERE commentID = @commentID

--================================= RSOs ===================================
-- Creates an RSO and sets it to pending
INSERT INTO RSOs (rsoID, rsoName, ownerID, approved) VALUES (@rsoID, @rsoName, @ownerID, 0, @rso_Desc);

-- Updates an RSO's information
UPDATE RSOs SET @field = @value WHERE rsoID = @rsoID;

-- Deletes an RSO
DELETE FROM RSOs WHERE rsoID = @rsoID;

-- Returns a field from an RSO
SELECT @field FROM RSOs WHERE rsoID = @rsoID;

-- Returns rsoIDs given a userID
SELECT rsoID FROM RSOMemberships WHERE userID = @userID;

-- Adds a user to an existing RSO
INSERT INTO RSOMemberships (rsoID, userID) VALUES (@rsoID, @userID);

-- Deletes a user from an existing RSO
DELETE FROM RSOMemberships WHERE userID = @userID AND rsoID = @rsoID;

-- Selects RSOs with less than 5 members
SELECT DISTINCT rsoID FROM RSOMemberships GROUP BY rsoID HAVING COUNT(rsoID) < 5;

-- Selects RSOs with at least 5 members, but are not approved
SELECT DISTINCT Members.rsoID FROM  RSOs INNER JOIN RSOMemberships Members ON RSOs.rsoID = Members.rsoID WHERE  RSOs.approved != 1 GROUP BY Members.rsoID HAVING COUNT(Members.rsoID) > 4;

-- Selects RSOs which are approved
SELECT rsoID FROM RSOs WHERE approved = 1;
