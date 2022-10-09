/**
 * Code router
 */

const router = require("express").Router();

const {
    saveCode,
    getAllCode,
    getCodeByUserEmail,
} = require("../controllers/code.controller");

// GET /code - get all code
router.get("/", getAllCode);

// POST /code - save code
router.post("/", saveCode);

// GET /code/:email - get code by email
router.get("/:email", getCodeByUserEmail);

module.exports = router;
