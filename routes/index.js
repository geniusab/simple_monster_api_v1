const { Router } = require("express");

const router = Router();

const monsters = require("./monsters");
const habitats = require("./habitats");
const lives = require("./lives");

router.use("/api/monsters", monsters);
router.use("/api/habitats", habitats);
router.use("/api/lives", lives);

module.exports = router;
