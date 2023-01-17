module.exports = (app) => {
  var allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    // intercept OPTIONS method
    if ("OPTIONS" == req.method) {
      res.sendStatus(200);
    } else {
      next();
    }
  };
  app.use(allowCrossDomain);
  app.use(require("../routes/signupRoute"));
  app.use(require("../routes/loginRoute"));
  app.use(require("../routes/createBlog"));
  app.use(require("../routes/categoriesRoute"));
  app.use(require("../routes/updateUserRoute"));
  app.use(require("../routes/contactRoute"));
  app.use(require("../routes/jobRoute"));


};
