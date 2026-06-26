// username, password | USERS table
// organization | ORGANIZATIONS table
// boards | BOARDS TABLE
// issues | ISSUES TABLE

const { authMiddleware } = require("./middleware");
const { userModel, organizationModel } = require("./models.js");

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

let BOARD_ID = 1;
let ISSUES_ID = 1;

app.post("/signup", async function (req, res) {
  const username = req.body.username
  const password = req.body.password

  const userExists = await userModel.findOne({ username })

  if (userExists) {
    res.status(403).json({
      message: "User with this username already exists"
    })
    return;
  }

  const newUser = await userModel.create({
    username,
    password,
  });

  res.json({
    id: newUser._id,
    message: "You have signed up successfully"
  })
})

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const userExists = await userModel.findOne({
    username,
    password
  });

  if (!userExists) {
    res.status(401).json({
      message: "Invalid credentials"
    });

    return;
  }

  const token = jwt.sign({
    userId: userExists._id
  }, "projectmanagementsupersecretpassword123123")

  res.json({
    message: "You have successfully logged in",
    token
  })
})


// authenticated route
app.post("/organization", authMiddleware, async function (req, res) {
  const userId = req.userId;
  const { title, description } = req.body;

  const organizationExists = await organizationModel.findOne({
    title: title,
    admin: userId // Filters down the search strictly to this user's creations
  })

  if (organizationExists) {
    return res.status(400).json({
      message: "You have already created an organization with this name"
    });
  }

  const newOrg = await organizationModel.create({
    title: req.body.title,
    description: req.body.description,
    admin: userId,
    members: [userId] // Automatically adds admin as a member
  })

  res.status(201).json({
    message: "Organisation created",
    id: newOrg._id
  })
})

app.post("/add-member-to-organization", authMiddleware, async function (req, res) {
  const userId = req.userId;
  const organizationId = req.body.organizationId; // get orgId from req
  const memberUserUsername = req.body.memberUserUsername;  // userEmail from req


  const organization = await organizationModel.findOne({
    _id: organizationId
  })

  if (!organization || organization.admin.toString() != userId) {
    // if org does not exist or the user is not admin
    res.status(411).json({
      message: "Either this org doesnt exist or you are not an admin of this org to add a member"
    })
    return
  }

  const memberUser = await userModel.findOne({
    username: memberUserUsername
  })

  // if no user found to add as a member 
  if (!memberUser) {
    res.status(411).json({
      message: "No user with this username exists in our db"
    })
    return
  }

  const isAlreadyMember = organization.members.some(memberId => memberId.equals(memberUser._id));

  // const isAlreadyMember = organization.members.some(memberId => memberId.toString() === memberUser._id.toString()); // <-- this could have been used as well
  if (isAlreadyMember) {
    return res.status(400).json({
      message: "This user is already a member of this organization"
    });
  }

  /*
  await organization.updateOne({
    $push: {
      members: memberUser._id
    }
  })
    // This is one way to add an element to an array of element via mongoose
  */

  organization.members.push(memberUser._id)
  await organization.save();

  res.json({
    message: "New member added!"
  })

})

app.post("/board", function (req, res) {

})



app.post("/issue", function (req, res) {

})

// ALL THE READ ENDPOINTS BELOW

app.get("/organization", authMiddleware, async function (req, res) {
  const userId = req.userId;
  const organizationId = req.query.organizationId
  const organization = await organizationModel.findOne({ _id: organizationId });

  if (!organization || !organization.admin.equals(userId)) {
    // if org does not exist or the user is not admin
    res.status(411).json({
      message: "Either this org doesnt exist or you are not an admin of this org to add a member"
    })
    return
  }

  const members = await userModel.find({
    _id: organization.members
  })

  res.json({
    organization: {
      title: organization.title,
      description: organization.description,
      members: members.map(member => ({
        id: member._id,
        username: member.username
      })
      )
    }
  })
})

// backend.trello.com/boards?organizationId=2
app.get("/boards", function (req, res) {

})

app.get("/issues", function (req, res) {

})

app.get("/members", function (req, res) {

})

//  update an issue(move them from one colum to another)
app.put("/issues/:issueId", function (req, res) {

})

//  delete a member
app.delete("/members", authMiddleware, async function (req, res) {
  const userId = req.userId;
  const organizationId = req.body.organizationId; // get orgId from req
  const memberUserUsername = req.body.memberUserUsername;  // userEmail from req

  const organization = await organizationModel.findOne({ _id: organizationId }); // find the org using the sent orgId

  if (!organization || !organization.admin.equals(userId)) {
    // if org does not exist or the user is not admin
    res.status(411).json({
      message: "Either this org doesnt exist or you are not an admin of this org to add a member"
    })
    return
  }

  const memberUser = await userModel.findOne({ username: memberUserUsername }); // find the user using the userEmail

  // if no user found to add as a member 
  if (!memberUser) {
    res.status(411).json({
      message: "No user with this username exists in our db"
    })
    return
  }

  /*
  await organizationModel.updateOne({
    _id: organizationId
  }, {
    "$pull": {
      members: memberUser._id  // remove the user that has the memberUser's id
    }
  })
  */

  console.log("organization before member removal", organization.members);
  organization.members = organization.members.filter(member => member.toString() != memberUser._id.toString());
  await organization.save();
  console.log("organization after member removal", organization.members);
  res.json({
    message: "Member has been removed!"
  })
})


app.listen(3000);