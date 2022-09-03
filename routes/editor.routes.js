const router = require("express").Router();

const { showWelcomeMessage } = require("../controllers/editor.controller");

router.get("/", showWelcomeMessage);

module.exports = router;
