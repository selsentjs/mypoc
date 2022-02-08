const express = require("express");
const router = express.Router();
const uploadFiles = require("../controller/handleFiles");

router.route("/").get(uploadFiles);
module.exports = router;
