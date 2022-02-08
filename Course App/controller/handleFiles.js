//write video using stream

var fs = require("fs");

const uploadVideo = async (req, res) => {
  const fromPath = req.body.path; 
  // read video from =>   "path":"E:\\Course App\\SampleVideo\\nodejs_john_Chapter1.mp4"
  const readableStream = fs.createReadStream(fromPath);
  var filename = fromPath.replace(/^.*[\\\/]/, "");

  // write video to "uploads" folder inside
  const writableStream = fs.createWriteStream("uploads/" + filename);
  readableStream.pipe(writableStream).on("error", console.error);
  res.status(200).json({ msg: "Video stored successfully" });
};

module.exports = uploadVideo;
