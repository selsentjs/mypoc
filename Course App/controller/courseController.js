const con = require("../database/connection");

const getAllCourses = async (req, res) => {
  try {
    const sql =
      "SELECT CourseID,CourseName, Author, Description, TotalChapters, Price FROM course";
    con.query(sql, (err, data, field) => {
      if (err) throw err;
      res.status(200).json({ data, count: data.length });
    });
  } catch (exp) {
    res.status(500).json({ msg: exp });
  }
};
const getSingleCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const sql =
      "SELECT CourseID,CourseName, Author, Description, TotalChapters, Price FROM course WHERE CourseID = ?";
    con.query(sql, [id], (err, data, field) => {
      if (err) throw err;
      res.status(200).json({ data });
    });
  } catch (exp) {
    res.status(500).json({ msg: exp });
  }
};

const createCourse = async (req, res) => {
  try {
    const { CourseName, Author, Description, TotalChapters, Price } = req.body;
    const sql =
      "INSERT INTO COURSE ( CourseName, Author, Description, TotalChapters, Price) VALUES ('" +
      CourseName +
      "','" +
      Author +
      "','" +
      Description +
      "','" +
      TotalChapters +
      "','" +
      Price +
      "' )";

    con.query(sql, (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "Value inserted successfully" });
    });
  } catch (exp) {
    res.status(500).json({ msg: exp });
  }
};

const updateCourse = async (req, res) => {
  try {
    const sql =
      "UPDATE course SET  CourseName = ?, Author = ?, Description = ?, TotalChapters = ?, Price = ? WHERE CourseID = ?";

    let { CourseName, Author, Description, TotalChapters, Price } = req.body;
    let CourseID = req.params.id;

    con.query(
      sql,
      [CourseName, Author, Description, TotalChapters, Price, CourseID],
      (err) => {
        if (err) throw err;
        res.status(200).json({ msg: "Updated Successfully" });
      }
    );
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const deleteCourse = async (req, res) => {
  try {
    let sql =
      "UPDATE course SET Active_Flag = 0 WHERE Active_Flag = 1 AND CourseID = ?";
    let CourseID = req.params.id;
    con.query(sql, CourseID, (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "Deleted successfully" });
    });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = {
  getAllCourses,
  getSingleCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};
