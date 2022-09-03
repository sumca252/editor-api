const router = require("express").Router();

const { getAllData, insertData } = require("../controllers/editor.controller");

router.get("/", getAllData);
router.post("/", insertData);

module.exports = router;
