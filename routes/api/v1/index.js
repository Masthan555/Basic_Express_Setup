const express = require("express");
const testController = require("../../../src/controllers/testController");

const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Welcome Masthan...");    
});

router.get("/get", testController.testGet);
router.post("/post", testController.testPost);
router.get("/testSqlGet", testController.testSqlGet);
router.post("/testSqlPost", testController.testSqlInsert);

module.exports = router;