const router = require("express").Router();

const {
    getAllData,
    insertData,
    updateById,
} = require("../controllers/editor.controller");

router.get("/", getAllData);
router.post("/", insertData);
router.put("/:id", updateById);

module.exports = router;
