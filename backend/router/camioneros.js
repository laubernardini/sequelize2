const express = require("express");
const { Camion, Camionero } = require("../database/models/models");

const router = express.Router();


router.get("/", (req, res) => {
    Camionero.findAll({
        attributes:["Dni"]
    }).then((list) => {
      res.json(list);
    });
  });
  


module.exports = router;