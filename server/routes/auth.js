const { register, login, setAvatar, getAllUsers,logout } = require("../controllers/usersController");

const router=require("express").Router();

router.post("/register",register);
router.post("/login", login);
router.post("/setavatar/:id", setAvatar);
router.get("/allusers/:id", getAllUsers);
// router.get("/logout/:id", logout);

module.exports=router;