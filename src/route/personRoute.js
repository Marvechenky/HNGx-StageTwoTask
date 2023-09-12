const express = require("express");

const router = express.Router();

const { addPerson, getPerson, updatePerson, deletePerson } = require("../controller/personController");



router.use(express.json());


router.post("/", addPerson);
router.get("/:id", getPerson);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);


module.exports = router;

