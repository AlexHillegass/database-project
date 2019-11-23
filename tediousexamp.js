var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var async = require('async');

class Ted{
    constructor(){
        var config = {
            server: 'database-1.ckfzd1mhlzyq.us-east-2.rds.amazonaws.com',
            authentication: {
                type: 'default',
                options: {
                    userName: 'admin', // update me
                    password: '1234567890' // update me
                }
            },
            options: {
              database: 'Backend'
            }
          }

        var connection = new Connection(config);
        connection.on('connect', function(err) {
            if (err) {
            console.log(err);
            } else {
            console.log('Connection verified');
            }
        });

        
    }
}

var t = new Ted();

// var config = {
//     server: 'database-1.ckfzd1mhlzyq.us-east-2.rds.amazonaws.com',
//     authentication: {
//         type: 'default',
//         options: {
//             userName: 'admin', // update me
//             password: '1234567890' // update me
//         }
//     },
//     options: {
//       database: 'Backend'
//     }
//   }

// connection = new Connection(config);
// connection.on('connect', function(err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('Connection verified');
//     }
//   });
