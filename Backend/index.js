require("cors");
const exp = require("express");
const { success, error } = require("consola");
require("mongoose");
require("joi");
require("./config/mongo_conn");
const { PORT } = require("./config/keys");
const multer = require("multer");
const path = require("path");
const app = exp();
app.use(exp.json());
require("./utils/middlware")(app);
app.use("/images", exp.static(path.join(__dirname, "images")));

/// image upload functionality...........................
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },

  filename: function (req, file, cb) {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res, next) => {
  res.send("file has been uploaded");
  next();
});
//-----------------------------------------------------

app.listen(PORT, () => {
  success({ measage: `Your port is runing on ${PORT}` });
});
module.exports = app;
