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

describe("Users", () => {
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

    describe("POST /api/users/author/:email", () => {
        it("Should return 200", (done) => {
            chai.request(server)
                .get("/api/users/author/jane.doe@test.com")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property("data");
                    res.body.data.should.be.a("array");
                    res.body.data[0].should.have.property("_id");
                    res.body.data[0].should.have.property("title");
                    res.body.data[0].should.have.property("content");
                    res.body.data[0].should.have.property("author");
                    res.body.data[0].should.have.property("allowed_users");

                    done();
                });
        });

        it("Should return 200", (done) => {
            chai.request(server)
                .get("/api/users/shared/jane.doe@test.com")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property("data");
                    res.body.data.should.be.a("array");
                    res.body.data[0].should.have.property("_id");
                    res.body.data[0].should.have.property("title");
                    res.body.data[0].should.have.property("content");
                    res.body.data[0].should.have.property("author");
                    res.body.data[0].should.have.property("allowed_users");

                    done();
                });
        });
    });
});
