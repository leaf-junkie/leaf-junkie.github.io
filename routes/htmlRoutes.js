const path = require("path");

module.exports = function(app) {

  app.get("/work", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/work.html"));
  });

  // app.get("/play", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/play.html"));
  // });

  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

  // app.get("/contact", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/contact.html"));
  // });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
