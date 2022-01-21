const testModel = require("../models/testModel");

module.exports = {
    testGet: (req, res)=>{
        res.status(200).send("GET request working fine");
    },

    testPost: (req, res)=>{
        res.send("POST request working fine");
    },

    testSqlGet: (req, res)=>{
        let data = [];
        let resBody = {};
        testModel.getTestData(data, (err, results)=>{
            if(err){
                console.log(err);
                resBody.success = false;
                resBody.message = "Error while testing SQL get";
                return res.status(500).send(resBody);
            }
            resBody.success = true;
            resBody.results = results;

            return res.status(200).send(resBody);
        });
    },

    testSqlInsert: (req, res)=>{
        let data = req.body;
        let resBody = {};
        console.log(req.body);
        if(data.shopId && data.shopName){
            testModel.createTestData(data, (err, results)=>{
                if(err){
                    console.log(err);
                    resBody.success = false;
                    resBody.message = "Error while testing SQL insert";
                    return res.status(500).send(resBody);
                }
                resBody.success = true;
                resBody.message = "Record inserted successfully..";
    
                return res.status(201).send(resBody);
            });
        }
    }
};