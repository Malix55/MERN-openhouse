const { addCompany } = require("../controllers/user.js");
const router = require("express").Router();

router.post("/company", addCompany);

module.exports = router;
