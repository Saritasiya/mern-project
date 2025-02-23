const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-control")
const {signupSchema,loginSchema} = require("../validators/auth-validator");
const validate = require("../middleware/middleware");
const authMiddleware=require("../middleware/authMiddleware")


// router.get("/", (req, res) => {
//     res
//         .status(200)
//         .send("welcome to the my ruoter channel  ")
// });

router.route("/").get(authControllers.home);
router.route("/register").post(validate(signupSchema), authControllers.register);
router.route("/login").post(validate(loginSchema), authControllers.login);
router.route("/user").get(authMiddleware,authControllers.user);

module.exports = router;