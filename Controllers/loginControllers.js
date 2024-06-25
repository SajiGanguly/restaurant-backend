const express = require("express");
const admin = require("../Config/firebaseConfig");
const dotenv = require("dotenv");
const axios = require("axios");
dotenv.config();
const router = express.Router();

router.post("/signin", async (req, res) => {
console.log(req.body);
let email = req.body.email;
let password = req.body.password;
console.log(process.env.FIREBASE_API_KEY);

try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );

    const { idToken, refreshToken, expiresIn, localId } = response.data;

  
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    res.status(200).json({
      message: "User signed in successfully",
      token: idToken,
      refreshToken,
      expiresIn,
      userId: localId,
      decodedToken,
    });
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(400).json( error );
  }
});

module.exports = router;