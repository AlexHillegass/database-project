const sql = require('mssql')

export class SQL {
    constructor(props) {
        super(props);

        this.config = {
            user: '',
            password: '',
            server: '',
            database: '',
        }

        connect(config);
        
    }

    // config has username, password, server address, and database name
    connect(config) {
        try {
            sql.connect(config);
        } catch (err) {
            // some kind of error
        }
    }

    login(req, res) {
        // username and password
        try {
            const result = sql.query(`SELECT * FROM mytable WHERE id = ${value}`);
            console.dir(result);
        } catch (err) {
            
        }
    }
    createUser(req, res) {
        // username email password userRole
        try {
            const result = sql.query(`INSERT * FROM mytable WHERE id = ${value}`);
            console.dir(result);
        } catch (err) {
            
        }
    }
    createUniversity(req, res) {
        // name location description numStudents userId
        try {
            const result = sql.query(`INSERT * FROM mytable WHERE id = ${value}`);
            console.dir(result);
        } catch (err) {
            
        }
    }
    updateUniversity(req, res) {
        // name location description numStudents userId
        try {
            const result = sql.query(`UPDATE * FROM mytable WHERE id = ${value}`);
            console.dir(result);
        } catch (err) {
            
        }
    }
    createEvent(req, res) {
        // name category description time date location phone email userId
        try {
            const result = sql.query(`INSERT * FROM mytable WHERE id = ${value}`);
            console.dir(result);
        } catch (err) {
            
        }
    }
    updateEvent(req, res) {
        // only if you created the event
        // name category description time date location phone email userId
        try {
            const result = sql.query(`UPDATE * FROM mytable WHERE id = ${value}`);
            console.dir(result);
        } catch (err) {
            
        }
    }
    createComment(req, res) {
        // eventId commentText
        try {
            const result = sql.query(`ISNERT * FROM mytable WHERE id = ${value}`);
            console.dir(result);
        } catch (err) {
            
        }
    }
    updateComment(req, res) {
        // eventId commentText userId
        try {
            const result = sql.query(`UPDATE * FROM mytable WHERE id = ${value}`);
            console.dir(result);
        } catch (err) {
            
        }
    }
    rateEvent(req, res) {
        // userId rating?
        try {
            const result = sql.query(`SELECT * FROM mytable WHERE id = ${value}`);
            console.dir(result);
        } catch (err) {
            
        }
    }
    createLocation(req, res) {
        // zip addres lat long? who knows
        try {
            const result = sql.query(`INSERT * FROM mytable WHERE id = ${value}`);
            console.dir(result);
        } catch (err) {
            
        }
    }
    createPendingRSO(req, res) {
        // name category description time date location phone email
        try {
            const result = sql.query(`INSERT * FROM mytable WHERE id = ${value}`);
            console.dir(result);
        } catch (err) {
            
        }
    }
    joinPendingRSO(req, res) {
        // userId rsoId
        try {
            const result = sql.query(`INSERT * FROM mytable WHERE id = ${value}`);
            console.dir(result);
        } catch (err) {
            
        }
    }
    joinRSO(req, res) {
        // userId rsoId
        try {
            const result = sql.query(`INSERT * FROM mytable WHERE id = ${value}`);
            console.dir(result);
        } catch (err) {
            
        }
    }
}