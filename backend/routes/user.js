const express = require('express');
const router = express.Router();
const { forLogin, forSignup } = require("../controllers/user")


router.post('/signin', forLogin);
router.post('/signup', forSignup);



module.exports = router;