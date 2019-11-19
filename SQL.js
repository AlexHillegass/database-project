var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var async = require('async');

class SQL {
    constructor() {
        // Connection info for database
        this.config = {
            server: 'localhost',
            authentication: {
                type: 'default',
                options: {
                    userName: 'sa', // update me
                    password: 'Passw0rd' // update me
                }
            },
            options: {
              database: 'SampleDB'
            }
          }

        this.connection = new Connection(this.config);

    }


//==================================== Users ====================================
    getPassword(id) {
        var c = this.connection;

        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'SELECT pass FROM Users WHERE userID = @id;';

                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('userID', TYPES.NVarChar, id);

                    c.execSql(request);
        }});
    }

    createUser(userID, first_name, last_name, emailAdd, pass, clearance, univID){
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'INSERT INTO Users (userID, first_name, last_name, emailAdd, pass, clearance) VALUES (@userID, @first_name, @last_name, @emailAdd, @pass, @clearance);';

                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('userID', TYPES.NVarChar, userID);
                    request.addParameter('first_name', TYPES.NVarChar, first_name);
                    request.addParameter('last_name', TYPES.NVarChar, last_name);
                    request.addParameter('emailAdd', TYPES.NVarChar, emailAdd);
                    request.addParameter('pass', TYPES.NVarChar, pass);
                    request.addParameter('clearance', TYPES.NVarChar, clearance);

                    c.execSql(request);
        }});

        // If admin or student user MUST belong to a university
        if(clearance < 2) {
            addToUniv(univID, userID);
        }
    }

    // This query may not work as expected
    updateUser(field, value, userID) {
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'UPDATE Users SET @field = @value WHERE userID = @userID;';


                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('field', TYPES.NVarChar, field);
                    request.addParameter('value', TYPES.NVarChar, value);
                    request.addParameter('userID', TYPES.NVarChar, userID);

                    c.execSql(request);
        }});
    }

    deleteUser(userID) {
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'DELETE FROM Users WHERE userID = @userID;';

                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('userID', TYPES.NVarChar, userID);

                    c.execSql(request);
        }});
    }

    getUserField(field, userID) {
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'SELECT @field FROM Users WHERE userID = @userID;';

                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('userID', TYPES.NVarChar, userID);
                    request.addParameter('field', TYPES.NVarChar, field)

                    c.execSql(request);
        }});
    }

//==================================== Universities ====================================
    createUniversity(univID, univName, creatorID) {
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'INSERT INTO Universities (univID, univName, creatorID) VALUES (@univID, @univName, @creatorID);';

                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('univID', TYPES.NVarChar, univID);
                    request.addParameter('univName', TYPES.NVarChar, univName);
                    request.addParameter('creatorID', TYPES.NVarChar, creatorID);

                    c.execSql(request);
        }});
    }

    // Unsure if this will work
    updateUniversity(field, value, univID) {
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'UPDATE Universities SET @field = @value WHERE univID = @univID;';

                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('field', TYPES.NVarChar, field);
                    request.addParameter('value', TYPES.NVarChar, value);
                    request.addParameter('univID', TYPES.NVarChar, univID);

                    c.execSql(request);
        }});
    }

    deleteUniversity(univID) {
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'DELETE FROM Universities WHERE univID = @univID;';

                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('univID', TYPES.NVarChar, univID);

                    c.execSql(request);
        }});
    }

    getUnivField(field, univID) {
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'SELECT @field FROM Universities WHERE univID = @univID;';

                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('univID', TYPES.NVarChar, univID);
                    request.addParameter('field', TYPES.NVarChar, field)

                    c.execSql(request);
        }});
    }

    addToUniv(univID, userID) {
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
            // SQL query goes here
            // values can be inserted by putting @varname
            // then adding a parameter at below
            var query =
            'INSERT INTO UnivMemberships (univID, userID) VALUES (@univID, @userID;';

                request = new Request(
                    query,
                    (err) => { (err ? console.log(err) : null)}
                );

                // first parameter: field name in databse
                // second: NVarChar works for chars and nums
                // third: value you would like to insert
                request.addParameter('userID', TYPES.NVarChar, userID);
                request.addParameter('univID', TYPES.NVarChar, univID);

                c.execSql(request);
      }});
    }

//==================================== User Events ====================================
    createUserEvent(eventID, eventName, category, descript, eventDate, eventType, venue, vAddress, latitude, longitude, isApproved, userID){
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'INSERT INTO SiteEvents (eventID, eventRating, eventName, category, descript, eventDate, eventType, venue, vAddress, latitude, longitude, isApproved) VALUES (@eventID, NULL, @eventName, @category, @descript, @eventDate, @eventType, @venue, @vAddress, @latitude, @longitude, @isApproved);';

                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('eventID', TYPES.NVarChar, eventID);
                    request.addParameter('eventName', TYPES.NVarChar, eventName);
                    request.addParameter('category', TYPES.NVarChar, category);
                    request.addParameter('descript', TYPES.NVarChar, descript);
                    request.addParameter('eventDate', TYPES.NVarChar, eventDate);
                    request.addParameter('eventType', TYPES.NVarChar, eventType);
                    request.addParameter('venue', TYPES.NVarChar, venue);
                    request.addParameter('vAddress', TYPES.NVarChar, vAddress);
                    request.addParameter('latitude', TYPES.NVarChar, latitude);
                    request.addParameter('longitude', TYPES.NVarChar, longitude);
                    request.addParameter('isApproved', TYPES.NVarChar, isApproved);

                    c.execSql(request);
        }});
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'INSERT INTO UserEventOwners (userID, eventID) VALUES (@userID, @eventID);';

                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('userID', TYPES.NVarChar, userID);
                    request.addParameter('eventID', TYPES.NVarChar, eventID);

                    c.execSql(request);
        }});
    }

    // Unsure if this will work
    updateUserEvent(field, value, eventID) {
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'UPDATE SiteEvents SET @field = @value WHERE eventID = @eventID;';

                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('field', TYPES.NVarChar, field);
                    request.addParameter('value', TYPES.NVarChar, value);
                    request.addParameter('eventID', TYPES.NVarChar, eventID);

                    c.execSql(request);
        }});
    }

    deleteUserEvent(eventID) {
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'DELETE FROM SiteEvents WHERE eventID = @eventID;';

                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('eventID', TYPES.NVarChar, eventID);

                    c.execSql(request);
        }});
    }

    getUserEventField(field, eventID) {
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'SELECT @field FROM SiteEvents WHERE eventID = @eventID;';

                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('eventID', TYPES.NVarChar, eventID);
                    request.addParameter('field', TYPES.NVarChar, field)

                    c.execSql(request);
        }});
    }


    getUserEventCommentField(field, commentID) {
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'SELECT @field FROM Comments WHERE commentID = @commentID;';

                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('commentID', TYPES.NVarChar, commentID);
                    request.addParameter('field', TYPES.NVarChar, field)

                    c.execSql(request);
        }});
    }

//==================================== RSO Events ====================================//
    createRSOEvent(eventID, eventName, category, descript, eventDate, venue, vAddress, latitude, longitude, rsoID){
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'INSERT INTO RSOEvents (eventID, eventRating, eventName, category, descript, eventDate, venue, vAddress, latitude, longitude) VALUES (@eventID, NULL, @eventName, @category, @descript, @eventDate, @venue, @vAddress, @latitude, @longitude);';

                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('eventID', TYPES.NVarChar, eventID);
                    request.addParameter('eventName', TYPES.NVarChar, eventName);
                    request.addParameter('category', TYPES.NVarChar, category);
                    request.addParameter('descript', TYPES.NVarChar, descript);
                    request.addParameter('eventDate', TYPES.NVarChar, eventDate);
                    request.addParameter('venue', TYPES.NVarChar, venue);
                    request.addParameter('vAddress', TYPES.NVarChar, vAddress);
                    request.addParameter('latitude', TYPES.NVarChar, latitude);
                    request.addParameter('longitude', TYPES.NVarChar, longitude);

                    c.execSql(request);
        }});
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'INSERT INTO RSOEventOwners (rsoID, eventID) VALUES (@rsoID, @eventID);';

                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('rsoID', TYPES.NVarChar, rsoID);
                    request.addParameter('eventID', TYPES.NVarChar, eventID);

                    c.execSql(request);
        }});
    }

    // Unsure if this will work
    updateRSOEvent(field, value, eventID) {
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'UPDATE RSOEvents SET @field = @value WHERE eventID = @eventID;';

                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('field', TYPES.NVarChar, field);
                    request.addParameter('value', TYPES.NVarChar, value);
                    request.addParameter('eventID', TYPES.NVarChar, eventID);

                    c.execSql(request);
        }});
    }

    deleteRSOEvent(eventID) {
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'DELETE FROM RSOEvents WHERE eventID = @eventID;';

                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('eventID', TYPES.NVarChar, eventID);

                    c.execSql(request);
        }});
    }

    getRSOEventField(field, eventID) {
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'SELECT @field FROM RSOEvents WHERE eventID = @eventID;';

                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('eventID', TYPES.NVarChar, eventID);
                    request.addParameter('field', TYPES.NVarChar, field)

                    c.execSql(request);
        }});
    }

    getRSOEventCommentField(field, commentID) {
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'SELECT @field FROM RSOComments WHERE commentID = @commentID;';

                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('commentID', TYPES.NVarChar, commentID);
                    request.addParameter('field', TYPES.NVarChar, field)

                    c.execSql(request);
        }});
    }

//==================================== RSOs ====================================
    createRSO(rsoID, rsoName, ownerID) {
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'INSERT INTO RSOs (rsoID, rsoName, ownerID, approved) VALUES (@rsoID, @rsoName, @ownerID, 0);';

                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('rsoID', TYPES.NVarChar, rsoID);
                    request.addParameter('rsoName', TYPES.NVarChar, rsoName);
                    request.addParameter('ownerID', TYPES.NVarChar, ownerID);

                    c.execSql(request);
        }});
    }

    updateRSO(field, value, rsoID) {
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'UPDATE RSOs SET @field = @value WHERE rsoID = @rsoID;';

                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('field', TYPES.NVarChar, field);
                    request.addParameter('value', TYPES.NVarChar, value);
                    request.addParameter('rsoID', TYPES.NVarChar, rsoID);

                    c.execSql(request);
        }});
    }

    deleteRSO(rsoID) {
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'DELETE FROM RSOs WHERE rsoID = @rsoID;';

                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('rsoID', TYPES.NVarChar, rsoID);

                    c.execSql(request);
        }});
    }

    addToRSO(rsoID, userID){
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'INSERT INTO RSOMemberships (rsoID, userID) VALUES (@rsoID, @userID);';

                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('rsoID', TYPES.NVarChar, rsoID);
                    request.addParameter('userID', TYPES.NVarChar, userID);

                    c.execSql(request);
        }});
    }

    deleteFromRSO(rsoID, userID){
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
                // SQL query goes here
                // values can be inserted by putting @varname
                // then adding a parameter at below
                var query =
                'DELETE FROM RSOMemberships WHERE userID = @userID AND rsoID = @rsoID;';

                    request = new Request(
                        query,
                        (err) => { (err ? console.log(err) : null)}
                    );

                    // first parameter: field name in databse
                    // second: NVarChar works for chars and nums
                    // third: value you would like to insert
                    request.addParameter('rsoID', TYPES.NVarChar, rsoID);
                    request.addParameter('userID', TYPES.NVarChar, userID);

                    c.execSql(request);
        }});
    }

    getApprovedRSOs() {
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
        var query =
        'SELECT rsoID FROM RSOs WHERE approved = 1';

            request = new Request(
                query,
                (err) => { (err ? console.log(err) : null)}
            );

            c.execSql(request);
        }});
    }

    getRSOsLTFive() {
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
        var query =
        'SELECT DISTINCT rsoID FROM RSOMemberships WHERE COUNT(rsoID) < 5;';

            request = new Request(
                query,
                (err) => { (err ? console.log(err) : null)}
            );

            c.execSql(request);
        }});
    }

    getApprovableRSOs() {
        var c = this.connection;
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
            } else {
        var query =
        'SELECT DISTINCT RSOs.rsoID FROM RSOs, RSOMemberships Members WHERE RSOs.approved != 1 AND COUNT(Members.rsoID) > 4;';

            request = new Request(
                query,
                (err) => { (err ? console.log(err) : null)}
            );

            c.execSql(request);
        }});
    }
};
module.exports = SQL;