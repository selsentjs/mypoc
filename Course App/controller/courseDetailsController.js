const con = require("../database/connection");

const getAllCourseDetails = async (req, res) => {
  try {
    const sql =
      "SELECT CourseID,Chapter, File_Location, File_Extention FROM course_details";
    con.query(sql, (err, data, field) => {
      if (err) throw err;
      res.status(200).json({ data, count: data.length });
    });
  } catch (exp) {
    res.status(500).json({ msg: exp });
  }
};
const getSingleCourseDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const sql =
      "SELECT CourseID,Chapter, File_Location, File_Extention FROM course_details WHERE id = ?";
    con.query(sql, [id], (err, data, field) => {
      if (err) throw err;
      res.status(200).json({ data });
    });
  } catch (exp) {
    res.status(500).json({ msg: exp });
  }
};

const createCourseDetails = async (req, res) => {
  try {
    const { CourseID, Chapter, File_Location, File_Extention } = req.body;
    const sql =
      "INSERT INTO COURSE_DETAILS (CourseID, Chapter, File_Location, File_Extention) VALUES ('" +
      CourseID +
      "','" +
      Chapter +
      "','" +
      File_Location +
      "','" +
      File_Extention +
      "')";

    con.query(sql, (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "Value inserted successfully" });
    });
  } catch (exp) {
    res.status(500).json({ msg: exp });
  }
};

const updateCourseDetails = async (req, res) => {
  try {
    const sql =
      "UPDATE course_details SET  CourseID = ?, Chapter = ?, File_Location = ?, File_Extention =? WHERE id = ?";

    let { CourseID, Chapter, File_Location, File_Extention } = req.body;
    let id = req.params.id;

    con.query(
      sql,
      [CourseID, Chapter, File_Location, File_Extention, id],
      (err) => {
        if (err) throw err;
        res.status(200).json({ msg: "Updated Successfully" });
      }
    );
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const deleteCourseDetails = async (req, res) => {
  try {
    let sql =
      "UPDATE course_details SET Active_Flag = 0 WHERE Active_Flag = 1 AND id = ?";
    let id = req.params.id;
    con.query(sql, id, (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "Deleted successfully" });
    });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = {
  getAllCourseDetails,
  getSingleCourseDetails,
  createCourseDetails,
  updateCourseDetails,
  deleteCourseDetails,
};
