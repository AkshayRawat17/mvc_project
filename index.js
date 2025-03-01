const express = require("express");
const hbs = require("hbs");
const session = require("express-session");
const Router = require("./routes/index");

hbs.registerPartials("./views/partials");

require("dotenv").config();

const app = express();
var sess = {
  secret: process.env.SESSION_SECRET_KEY,
  cookie: {},
};

if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}
app.use(session(sess));

require("./db_connect");
require("./helpers/index");

app.set("view engine", "hbs");
app.use(express.static("./views/static")); // use to server static files like css, js, images, etc
app.use("/public", express.static("public"));
app.use("/", Router);

let port = process.env.PORT || 8000
app.listen(8000, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
