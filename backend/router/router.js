const express = require("express");

const router = express.Router();
const camionerosRoute = require("./camioneros");
const camionesRoute = require('./camiones')

// Routes
router.use("/", (req, res) => res.send("Server web corriendo"));


router.use("/camioneros", camionerosRoute);

router.use('/camiones', camionesRoute);

module.exports = router;
