const mongoose = require("mongoose");
const { DB_URL, MSG } = require("./keys");
const { success, error } = require("consola");
//Set up default mongoose connection
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => {
    success({ msg: `${MSG}` });
  })
  .catch((err) => {
    error({ msg: "Sorry!.. not Connected with MongoDB", err });
  });
