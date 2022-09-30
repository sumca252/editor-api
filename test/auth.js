/* eslint-disable no-async-promise-executor */
/* eslint-disable no-undef */
process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");

const database = require("../db/database");
const collectionName = "test";

chai.should();

chai.use(chaiHttp);

describe("Auth", () => {
    before(() => {
        return new Promise(async (resolve) => {
            const db = await database.getDb(collectionName);

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

    describe("DELETE /api/users/reset", () => {
        it("Should return 200", (done) => {
            chai.request(server)
                .delete("/api/users/reset")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.should.have.property("message");
                    res.body.message.should.be.eq("Users collection reset");
                    done();
                });
        });
    });

    describe("POST /api/auth/register", () => {
        it("Should return 201", (done) => {
            const user = {
                email: "test.user@test.com",
                password: "password",
            };

            chai.request(server)
                .post("/api/auth/register")
                .send(user)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a("object");
                    res.body.should.have.property("message");
                    res.body.message.should.be.eq("User created");
                    res.body.user.should.have.property("id");
                    res.body.user.email.should.be.eq(user.email);

                    done();
                });
        });

        it("Should return 400", (done) => {
            const test = {
                username: "test",
                password: "password",
            };

            chai.request(server)
                .post("/api/auth/register")
                .send(test)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a("object");
                    res.body.should.have.property("message");
                    res.body.message.should.be.eq("Missing email or password");
                    done();
                });
        });

        it("Should return 409", (done) => {
            const user = {
                email: "test.user@test.com",
                password: "password",
            };

            chai.request(server)
                .post("/api/auth/register")
                .send(user)
                .end((err, res) => {
                    res.should.have.status(409);
                    res.body.should.be.a("object");
                    res.body.should.have.property("message");
                    res.body.message.should.be.eq("User already exists");
                    done();
                });
        });
    });

    describe("POST /api/auth/login", () => {
        it("Should return 200", (done) => {
            const user = {
                email: "john.smith@test.com",
                password: "pass",
            };

            chai.request(server)
                .post("/api/auth/login")
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.should.have.property("status");
                    res.body.should.have.property("user");
                    res.body.status.should.be.eq(200);
                    res.body.user.should.have.property("token");
                    done();
                });
        });

        it("Should return 400", (done) => {
            const test = {
                email: "test@gmail.com",
                password: "password",
            };

            chai.request(server)
                .post("/api/auth/login")
                .send(test)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a("object");
                    res.body.should.have.property("message");
                    res.body.message.should.be.eq("User does not exist");
                    done();
                });
        });
    });
});
