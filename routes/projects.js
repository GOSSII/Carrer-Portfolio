let express = require("express");
let router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("projects/index", { title: "Projects" });
});

router.get("/jbplatedepo", (req, res, next) => {
  res.render("projects/jbplatedepo", { title: "JB Plate Depo" });
});

router.get("/mightycause", (req, res, next) => {
  res.render("projects/mightycause", { title: "Mighty Cause" });
});

module.exports = router;
