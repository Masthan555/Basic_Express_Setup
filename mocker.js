const jestmock = require("jest-mock");

module.exports = {
    mockRequest: ()=>{
        const req = {};

        req.body = jestmock.fn().mockReturnValue(req);

        return req;
    },

    mockResponse: ()=>{
        const res = {};

        res.status = jestmock.fn().mockReturnValue(res);
        res.send = jestmock.fn().mockReturnValue(res);

        return res;
    }
};