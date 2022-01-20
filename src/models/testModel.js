const sqlConnection = require("../services/sqlConnection");

module.exports = {
    getTestData: (data, cb)=>{
        let sql = "SELECT * FROM shops LIMIT 10";
        let vals = [];

        sqlConnection.executeQuery(sql, vals, (err, results)=>{
            cb(err, results);
        });
    },

    createTestData: (data, cb)=>{
        let sql = "INSERT INTO shops(s_id, shop_name) VALUES(?,?)";
        let vals = [];
        vals.push(data.shopId);
        vals.push(data.shopName);

        sqlConnection.executeQuery(sql, vals, (err, results)=>{
            cb(err, results);
        });
    }
};