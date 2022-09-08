const router = require("express").Router();

const {
    getAllData,
    insertData,
    updateById,
    getOneById,
    deleteAllData,
} = require("../controllers/editor.controller");

// GET /api/editor - get all editor data from the database
router.get("/", getAllData);

// POST /api/editor - insert new data into the database
router.post("/", insertData);

// PUT /api/editor/:id - update data by id
router.put("/:id", updateById);

// GET /api/editor/:id - get data by id
router.get("/:id", getOneById);

// DELETE /api/editor/reset - delete all data from the database
router.delete("/reset", deleteAllData);

module.exports = router;
