var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var async = require('async');

module.export class SQL {
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

        this.connection = new Connection(config);

    }

    checkConnection(){
        this.connection.on('connect', function(err) {
            if(err) {
                console.log(err);
                return false;
            } else {
                return true;
            }
        });
    }

//==================================== Users ====================================
    getPassword(id) {
        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'SELECT pass FROM Users WHERE userID = @id;';

        if(this.checkConnection()){
            request = new Request(
                query,
                (err) => { (err ? console.log(err) : null)}
            );

            // first parameter: field name in databse
            // second: NVarChar works for chars and nums
            // third: value you would like to insert
            request.addParameter('userID', TYPES.NVarChar, id);

            this.connection.execSql(request);
        }
    }

    createUser(userID, first_name, last_name, emailAdd, pass, clearance, univID){
        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'INSERT INTO Users (userID, first_name, last_name, emailAdd, pass, clearance) VALUES (@userID, @first_name, @last_name, @emailAdd, @pass, @clearance);';

        if(this.checkConnection()){
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

            this.connection.execSql(request);
        }

        // If admin or student user MUST belong to a university
        if(clearance < 2) {
            addToUniv(univID, userID);
        }
    }

    // This query may not work as expected
    updateUser(field, value, userID) {
        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'UPDATE Users SET @field = @value WHERE userID = @userID;';

        if(this.checkConnection()){
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

            this.connection.execSql(request);
        }
    }

    deleteUser(userID) {
        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'DELETE FROM Users WHERE userID = @userID;';

        if(this.checkConnection()){
            request = new Request(
                query,
                (err) => { (err ? console.log(err) : null)}
            );

            // first parameter: field name in databse
            // second: NVarChar works for chars and nums
            // third: value you would like to insert
            request.addParameter('userID', TYPES.NVarChar, userID);

            this.connection.execSql(request);
        }
    }

    getUserField(field, userID) {
        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'SELECT @field FROM Users WHERE userID = @userID;';

        if(this.checkConnection()){
            request = new Request(
                query,
                (err) => { (err ? console.log(err) : null)}
            );

            // first parameter: field name in databse
            // second: NVarChar works for chars and nums
            // third: value you would like to insert
            request.addParameter('userID', TYPES.NVarChar, userID);
            request.addParameter('field', TYPES.NVarChar, field)

            this.connection.execSql(request);
        }
    }

//==================================== Universities ====================================
    createUniversity(univID, univName, creatorID) {
        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'INSERT INTO Universities (univID, univName, creatorID) VALUES (@univID, @univName, @creatorID);';

        if(this.checkConnection()){
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

            this.connection.execSql(request);
        }
    }

    // Unsure if this will work
    updateUniversity(field, value, univID) {
        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'UPDATE Universities SET @field = @value WHERE univID = @univID;';

        if(this.checkConnection()){
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

            this.connection.execSql(request);
        }
    }

    deleteUniversity(univID) {
        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'DELETE FROM Universities WHERE univID = @univID;';

        if(this.checkConnection()){
            request = new Request(
                query,
                (err) => { (err ? console.log(err) : null)}
            );

            // first parameter: field name in databse
            // second: NVarChar works for chars and nums
            // third: value you would like to insert
            request.addParameter('univID', TYPES.NVarChar, univID);

            this.connection.execSql(request);
        }
    }

    getUnivField(field, univID) {
        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'SELECT @field FROM Universities WHERE univID = @univID;';

        if(this.checkConnection()){
            request = new Request(
                query,
                (err) => { (err ? console.log(err) : null)}
            );

            // first parameter: field name in databse
            // second: NVarChar works for chars and nums
            // third: value you would like to insert
            request.addParameter('univID', TYPES.NVarChar, univID);
            request.addParameter('field', TYPES.NVarChar, field)

            this.connection.execSql(request);
        }
    }

    addToUniv(univID, userID) {
      // SQL query goes here
      // values can be inserted by putting @varname
      // then adding a parameter at below
      var query =
      'INSERT INTO UnivMemberships (univID, userID) VALUES (@univID, @userID;';

      if(this.checkConnection()){
          request = new Request(
              query,
              (err) => { (err ? console.log(err) : null)}
          );

          // first parameter: field name in databse
          // second: NVarChar works for chars and nums
          // third: value you would like to insert
          request.addParameter('userID', TYPES.NVarChar, userID);
          request.addParameter('univID', TYPES.NVarChar, univID);

          this.connection.execSql(request);
      }
    }

//==================================== User Events ====================================
    createUserEvent(eventID, eventName, category, descript, eventDate, eventType, venue, vAddress, latitude, longitude, isApproved, userID){
        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'INSERT INTO SiteEvents (eventID, eventRating, eventName, category, descript, eventDate, eventType, venue, vAddress, latitude, longitude, isApproved) VALUES (@eventID, NULL, @eventName, @category, @descript, @eventDate, @eventType, @venue, @vAddress, @latitude, @longitude, @isApproved);';

        if(this.checkConnection()){
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

            this.connection.execSql(request);
        }

        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'INSERT INTO UserEventOwners (userID, eventID) VALUES (@userID, @eventID);';

        if(this.checkConnection()){
            request = new Request(
                query,
                (err) => { (err ? console.log(err) : null)}
            );

            // first parameter: field name in databse
            // second: NVarChar works for chars and nums
            // third: value you would like to insert
            request.addParameter('userID', TYPES.NVarChar, userID);
            request.addParameter('eventID', TYPES.NVarChar, eventID);

            this.connection.execSql(request);
        }
    }

    // Unsure if this will work
    updateUserEvent(field, value, eventID) {
        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'UPDATE SiteEvents SET @field = @value WHERE eventID = @eventID;';

        if(this.checkConnection()){
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

            this.connection.execSql(request);
        }
    }

    deleteUserEvent(eventID) {
        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'DELETE FROM SiteEvents WHERE eventID = @eventID;';

        if(this.checkConnection()){
            request = new Request(
                query,
                (err) => { (err ? console.log(err) : null)}
            );

            // first parameter: field name in databse
            // second: NVarChar works for chars and nums
            // third: value you would like to insert
            request.addParameter('eventID', TYPES.NVarChar, eventID);

            this.connection.execSql(request);
        }
    }

    getUserEventField(field, eventID) {
        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'SELECT @field FROM SiteEvents WHERE eventID = @eventID;';

        if(this.checkConnection()){
            request = new Request(
                query,
                (err) => { (err ? console.log(err) : null)}
            );

            // first parameter: field name in databse
            // second: NVarChar works for chars and nums
            // third: value you would like to insert
            request.addParameter('eventID', TYPES.NVarChar, eventID);
            request.addParameter('field', TYPES.NVarChar, field)

            this.connection.execSql(request);
        }
    }


    getUserEventCommentField(field, commentID) {
        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'SELECT @field FROM Comments WHERE commentID = @commentID;';

        if(this.checkConnection()){
            request = new Request(
                query,
                (err) => { (err ? console.log(err) : null)}
            );

            // first parameter: field name in databse
            // second: NVarChar works for chars and nums
            // third: value you would like to insert
            request.addParameter('commentID', TYPES.NVarChar, commentID);
            request.addParameter('field', TYPES.NVarChar, field)

            this.connection.execSql(request);
        }
    }

//==================================== RSO Events ====================================//
    createRSOEvent(eventID, eventName, category, descript, eventDate, venue, vAddress, latitude, longitude, rsoID){
        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'INSERT INTO RSOEvents (eventID, eventRating, eventName, category, descript, eventDate, venue, vAddress, latitude, longitude) VALUES (@eventID, NULL, @eventName, @category, @descript, @eventDate, @venue, @vAddress, @latitude, @longitude);';

        if(this.checkConnection()){
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

            this.connection.execSql(request);
        }

        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'INSERT INTO RSOEventOwners (rsoID, eventID) VALUES (@rsoID, @eventID);';

        if(this.checkConnection()){
            request = new Request(
                query,
                (err) => { (err ? console.log(err) : null)}
            );

            // first parameter: field name in databse
            // second: NVarChar works for chars and nums
            // third: value you would like to insert
            request.addParameter('rsoID', TYPES.NVarChar, rsoID);
            request.addParameter('eventID', TYPES.NVarChar, eventID);

            this.connection.execSql(request);
        }
    }

    // Unsure if this will work
    updateRSOEvent(field, value, eventID) {
        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'UPDATE RSOEvents SET @field = @value WHERE eventID = @eventID;';

        if(this.checkConnection()){
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

            this.connection.execSql(request);
        }
    }

    deleteRSOEvent(eventID) {
        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'DELETE FROM RSOEvents WHERE eventID = @eventID;';

        if(this.checkConnection()){
            request = new Request(
                query,
                (err) => { (err ? console.log(err) : null)}
            );

            // first parameter: field name in databse
            // second: NVarChar works for chars and nums
            // third: value you would like to insert
            request.addParameter('eventID', TYPES.NVarChar, eventID);

            this.connection.execSql(request);
        }
    }

    getRSOEventField(field, eventID) {
        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'SELECT @field FROM RSOEvents WHERE eventID = @eventID;';

        if(this.checkConnection()){
            request = new Request(
                query,
                (err) => { (err ? console.log(err) : null)}
            );

            // first parameter: field name in databse
            // second: NVarChar works for chars and nums
            // third: value you would like to insert
            request.addParameter('eventID', TYPES.NVarChar, eventID);
            request.addParameter('field', TYPES.NVarChar, field)

            this.connection.execSql(request);
        }
    }

    getRSOEventCommentField(field, commentID) {
        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'SELECT @field FROM RSOComments WHERE commentID = @commentID;';

        if(this.checkConnection()){
            request = new Request(
                query,
                (err) => { (err ? console.log(err) : null)}
            );

            // first parameter: field name in databse
            // second: NVarChar works for chars and nums
            // third: value you would like to insert
            request.addParameter('commentID', TYPES.NVarChar, commentID);
            request.addParameter('field', TYPES.NVarChar, field)

            this.connection.execSql(request);
        }
    }

//==================================== RSOs ====================================
    createRSO(rsoID, rsoName, ownerID) {
        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'INSERT INTO RSOs (rsoID, rsoName, ownerID, approved) VALUES (@rsoID, @rsoName, @ownerID, 0);';

        if(this.checkConnection()){
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

            this.connection.execSql(request);
        }
    }

    updateRSO(field, value, rsoID) {
        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'UPDATE RSOs SET @field = @value WHERE rsoID = @rsoID;';

        if(this.checkConnection()){
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

            this.connection.execSql(request);
        }
    }

    deleteRSO(rsoID) {
        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'DELETE FROM RSOs WHERE rsoID = @rsoID;';

        if(this.checkConnection()){
            request = new Request(
                query,
                (err) => { (err ? console.log(err) : null)}
            );

            // first parameter: field name in databse
            // second: NVarChar works for chars and nums
            // third: value you would like to insert
            request.addParameter('rsoID', TYPES.NVarChar, rsoID);

            this.connection.execSql(request);
        }
    }

    addToRSO(rsoID, userID){
        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'INSERT INTO RSOMemberships (rsoID, userID) VALUES (@rsoID, @userID);';

        if(this.checkConnection()){
            request = new Request(
                query,
                (err) => { (err ? console.log(err) : null)}
            );

            // first parameter: field name in databse
            // second: NVarChar works for chars and nums
            // third: value you would like to insert
            request.addParameter('rsoID', TYPES.NVarChar, rsoID);
            request.addParameter('userID', TYPES.NVarChar, userID);

            this.connection.execSql(request);
        }
    }

    deleteFromRSO(rsoID, userID){
        // SQL query goes here
        // values can be inserted by putting @varname
        // then adding a parameter at below
        var query =
        'DELETE FROM RSOMemberships WHERE userID = @userID AND rsoID = @rsoID;';

        if(this.checkConnection()){
            request = new Request(
                query,
                (err) => { (err ? console.log(err) : null)}
            );

            // first parameter: field name in databse
            // second: NVarChar works for chars and nums
            // third: value you would like to insert
            request.addParameter('rsoID', TYPES.NVarChar, rsoID);
            request.addParameter('userID', TYPES.NVarChar, userID);

            this.connection.execSql(request);
        }
    }

    getApprovedRSOs() {
        var query =
        'SELECT rsoID FROM RSOs WHERE approved = 1';

        if(this.checkConnection()){
            request = new Request(
                query,
                (err) => { (err ? console.log(err) : null)}
            );

            this.connection.execSql(request);
        }
    }

    getRSOsLTFive() {
        var query =
        'SELECT DISTINCT Members.rsoID FROM  RSOs INNER JOIN RSOMemberships Members ON RSOs.rsoID = Members.rsoID WHERE  RSOs.approved != 1 GROUP BY Members.rsoID HAVING COUNT(Members.rsoID) > 5';

        if(this.checkConnection()){
            request = new Request(
                query,
                (err) => { (err ? console.log(err) : null)}
            );

            this.connection.execSql(request);
        }
    }

    getApprovableRSOs() {
        var query =
        'SELECT DISTINCT RSOs.rsoID FROM RSOs, RSOMemberships Members WHERE RSOs.approved != 1 AND COUNT(Members.rsoID) > 4;';

        if(this.checkConnection()){
            request = new Request(
                query,
                (err) => { (err ? console.log(err) : null)}
            );

            this.connection.execSql(request);
        }
    }
};
