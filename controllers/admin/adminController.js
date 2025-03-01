const User = require("../../models/User");

async function home(req, res) {
  let data = await User.findOne({_id: req.session.userid})
  res.render("admin/home", {
    title: "Admin",
    session: req.session,
    data:data
  });
}

module.exports = {
  home: home,
};
