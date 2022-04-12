var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toISOString().split("T")[0],
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toISOString().split("T")[0],
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Simple message board", messages: messages });
});

router.post("/new", function(req, res,next){
  messages.push({text: req.body.text, user: req.body.name, added: new Date().toISOString().split("T")[0]})
  res.redirect("/")
})



module.exports = router;
