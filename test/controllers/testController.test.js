const jestmock = require("jest-mock");
const testController = require("../../src/controllers/testController");
const {mockRequest, mockResponse} = require("../../mocker");

test("testing GET request", async ()=>{
    const req = mockRequest();
    const res = mockResponse();

    await testController.testGet(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith("GET request working fine");
});