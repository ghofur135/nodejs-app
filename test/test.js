    const request = require("supertest");
    const app = require("../index");

    describe("GET /", () => {
      it("respond with Hello World via GitHub with Jenkins", (done) => {
        request(app).get("/").expect("Hello World via GitHub with Jenkins", done);
      })
    });
