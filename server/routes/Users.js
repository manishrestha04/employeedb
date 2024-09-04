const express = require("express");
const router = express.Router();
const { Users } = require ("../models");
const bcrypt = require("bcrypt");
const {validateToken} = require("../middlewares/AuthMiddleware");
const {sign} = require('jsonwebtoken');


// Check if username already exists
router.post('/checkUsername', async (req, res) => {
    const { username } = req.body;
    const user = await Users.findOne({ where: { username } });
    if (user) {
      return res.status(400).json({ error: 'Username already exists' });
    }
    return res.status(200).json({ message: 'Username available' });
  });
  

router.post("/", async (req, res) => {

    const {username, password} = req.body;
    bcrypt.hash(password, 10).then((hash)=> {
        Users.create({
            username: username,
            password: hash,
        });
        res.json("Success");
    })
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await Users.findOne({ where: { username: username } });
  
      if (!user) {
        return res.status(400).json({ error: "Username doesn't exist" });
      }
  
      const match = await bcrypt.compare(password, user.password);
  
      if (!match) {
        return res.status(401).json({ error: 'Wrong Username or Password Combination' });
      }
  
      const accessToken = sign(
        { username: user.username, id: user.id },
        "importantsecret"
      );
      res.json({ token: accessToken, username: username, id: user.id });
  
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  

router.get('/auth', validateToken, (req, res)=> {
    res.json(req.user);
})


router.put("/changepassword", validateToken, async (req, res) => {
    const {oldPassword, newPassword} = req.body;
    const user = await Users.findOne({where: {username: req.user.username}});

    bcrypt.compare(oldPassword, user.password).then(async (match)=> {
        if(!match) 
            return res.status(401).json({ error: 'Old Password is Incorrect' });
            bcrypt.hash(newPassword, 10).then((hash)=> {
                 Users.update({password: hash}, {where: {username: req.user.username}});
                res.json("SUCCESS");
            
        });
    });


})

module.exports = router;