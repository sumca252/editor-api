const router = require("express").Router();

const { getAllData } = require("../controllers/editor.controller");

router.get("/", getAllData);

module.exports = router;
