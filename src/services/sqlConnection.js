const mysql = require("mysql2");
const config = require("../constants/backendConfig");

var pool = mysql.createPool(config.mysql.local);

module.exports = {
    executeQuery: (sql, data, cb)=>{
        pool.getConnection((err, connection)=>{
            if(err){
                cb(err);
            }else{
                connection.query(sql, data, (err1, results)=>{
                    connection.release();
                    cb(err1, results);
                });
            }

        });
    }
};