const express = require("express");
const admin = require("../Config/firebaseConfig");
const User = require("../Schemas/Users");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { registerName, registerEmail, registerPassword } = req.body;
  // var firebaseUserId = null;
  console.log("Received signup request:", req.body);

  if (!registerEmail || !registerName || !registerPassword) {
    console.log(
      "Missing required fields: registerName, registerEmail, or registerPassword"
    );
    return res
      .status(400)
      .send(
        "Missing required fields: registerName, registerEmail, or registerPassword"
      );
  }

  try {
    const userRecord = await admin.auth().createUser({
      email: registerEmail,
      password: registerPassword,
      displayName: registerName,
    });
    var firebaseUserId  = userRecord.uid;
    console.log("Successfully created new user:", userRecord);

    let user = await User.findOne({ registerEmail: registerEmail });
    console.log(firebaseUserId);
    console.log("Query result for registerEmail:", user);

    if (user) {
      console.log("User found");
      res.status(200).send("User already exists");
      // user.firebaseID = firebaseUserId;
      // user.registerName = registerName;
      //   user.registerEmail = registerEmail;
    } else {
      console.log("User not found, creating one");
      user = new User({
        firebaseID: firebaseUserId,
        registerName,
        registerEmail,
      });
      console.log(user);
    }

    if (!user.registerEmail || !user.firebaseID) {
      console.log("Register email or Firebase ID is null");
      throw new Error("Register email or Firebase ID is null");
    }

    console.log("Saving user with email:", user.registerEmail);

    await user.save();

    // res.redirect("/login");

    res.status(200).send("User created successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating new user");
  }
});

module.exports = router;
