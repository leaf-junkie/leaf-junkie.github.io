const express = require("express");

// define express app
const app = express();
const PORT = process.env.PORT || 8080;

// serve static assets
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// listener
app.listen(PORT, () => {
  console.log("==> 🌎 App listening on PORT: " + PORT);
});
