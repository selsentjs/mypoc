const express = require("express");
const router = express.Router();
const {
  getAllCourseDetails,
  getSingleCourseDetails,
  createCourseDetails,
  updateCourseDetails,
  deleteCourseDetails,
} = require("../controller/courseDetailsController");

router.route("/").get(getAllCourseDetails);
router.route("/:id").get(getSingleCourseDetails);
router.route("/").post(createCourseDetails);
router.route("/:id").patch(updateCourseDetails);
router.route("/:id").delete(deleteCourseDetails);

module.exports = router;
