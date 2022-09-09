/* eslint-disable no-undef */
process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");

chai.should();

chai.use(chaiHttp);

describe("Server", () => {
    describe("GET /api/editor", () => {
        it("Should return 404", (done) => {
            chai.request(server)
                .get("/")
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });

    describe("GET /api/editor", () => {
        it("Should return 200", (done) => {
            chai.request(server)
                .get("/api/editor")
                .end((err, res) => {
                    res.should.have.status(200);

                    done();
                });
        });
    });
});
