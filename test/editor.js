/* eslint-disable no-async-promise-executor */
/* eslint-disable no-undef */
process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");

const database = require("../db/database");
const collectionName = "test";

let _id = null;

chai.should();

chai.use(chaiHttp);

describe("Editor", () => {
    before(() => {
        return new Promise(async (resolve) => {
            const db = await database.getDb();

            db.db
                .listCollections({ name: collectionName })
                .next()
                .then(async function (info) {
                    if (info) {
                        await db.collection.drop();
                    }
                })
                .catch(function (err) {
                    console.error(err);
                })
                .finally(async function () {
                    await db.client.close();
                    resolve();
                });
        });
    });

    describe("DELETE /api/editor/reset", () => {
        it("Should reset database and return status 200", (done) => {
            chai.request(server)
                .delete("/api/editor/reset")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.should.have.property("message");
                    res.body.message.should.be.eq(
                        "Data deleted and inserted defaults"
                    );
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
                    res.body.should.be.a("object");
                    res.body.data.length.should.be.above(0);
                    done();
                });
        });
    });

    describe("POST /api/editor", () => {
        it("Should return 201", (done) => {
            chai.request(server)
                .post("/api/editor")
                .send({ title: "Test", content: "<p>Test</p>" })
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a("object");
                    res.body.should.have.property("message");
                    res.body.message.should.be.eq("Data inserted");
                    _id = res.body.id;
                    done();
                });
        });
    });

    describe("GET /api/editor/:id", () => {
        it("Should return 200", (done) => {
            chai.request(server)
                .get(`/api/editor/${_id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.data.should.have.property("title");
                    res.body.data.title.should.be.eq("Test");
                    res.body.data.should.have.property("content");
                    res.body.data.content.should.be.eq("<p>Test</p>");
                    done();
                });
        });

        it("Should return 500", (done) => {
            chai.request(server)
                .get("/api/editor/1")
                .end((err, res) => {
                    res.should.have.status(500);
                    res.body.should.be.a("object");
                    done();
                });
        });

        it("Should return 404", (done) => {
            chai.request(server)
                .get("/api/editor/631b0795f9c5d4f7bc0e292f")
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a("object");
                    res.body.should.have.property("message");
                    res.body.message.should.be.eq("No data found");
                    done();
                });
        });
    });

    describe("PUT /api/editor/:id", () => {
        it("Should return 200", (done) => {
            chai.request(server)
                .put(`/api/editor/${_id}`)
                .send({ title: "Test", content: "<h1>Test update</h1>" })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.should.have.property("message");
                    res.body.message.should.be.eq("Data updated");
                    done();
                });
        });

        it("Should return 500", (done) => {
            chai.request(server)
                .put(`/api/editor/631b0763ccf975cc7b5e3599`)
                .send({ title: "Test", content: "<h1>Test update</h1>" })
                .end((err, res) => {
                    res.should.have.status(500);
                    res.body.should.be.a("object");
                    res.body.should.have.property("message");
                    res.body.message.should.be.eq("Data not updated");
                    done();
                });
        });
    });
});
